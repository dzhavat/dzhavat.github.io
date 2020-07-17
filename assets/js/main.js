// @ts-check
(function () {
  'use strict';

  const stravaCardBody = document.querySelector('.strava-card .card-body');
  let timeoutId;

  if (stravaCardBody) {
    enhanceStravaCard();
  }

  if (isDateTimeFormatSupported()) {
    formatDates();
  }

  ////////////////
  
  function enhanceStravaCard() {
    showStartFetchingMessage();

    getLatestActivity()
      .then(response => {
        clearTimeout(timeoutId);

        const template = `
          <div class="latest-run">
            <div class="activity-name">
              <a href="https://www.strava.com/activities/${ response.id }" target="_blank" ref="noopener noreferrer">
                ${ response.name }
              </a>
            </div>
            <div class="stats">
              <div>
                <span class="label">Distance</span>
                <div>${ toKm(response.distance) } km</div>
              </div>
              <div>
                <span class="label">Time</span>
                <div>${ toMin(response.moving_time) } min</div>
              </div>
            </div>
          </div>
        `;

        stravaCardBody.innerHTML = template;
      })
      .catch(() => {
        stravaCardBody.innerHTML = '<p><small>Ouch! The activity request got lost in the Web forest.</small></p>';
      });
  }

  function formatDates() {
    const language = navigator.language;

    const dateTimeOptions = { month: 'long', year: 'numeric', day: 'numeric' };
    const dateTimeFormat = new Intl.DateTimeFormat(language, dateTimeOptions);

    const relativeTimeOptions = { numeric: 'auto' };
    const relativeTimeFormat = new Intl.RelativeTimeFormat(language, relativeTimeOptions);

    const oneDayInMs = 24 * 60 * 60 * 1000;
    const thirtyDaysInMs = 30 * oneDayInMs;

    const publishDates = [...document.querySelectorAll('.publish-date time')];

    publishDates.forEach(date => {
      const timeSincePublishInMs = new Date().getTime() - new Date(date.textContent).getTime();

      if ((timeSincePublishInMs > thirtyDaysInMs) || !isRelativeTimeFormatSupported()) {
        date.textContent = dateTimeFormat.format(new Date(date.textContent));
      } else {
        const daysSincePublish = Math.floor(timeSincePublishInMs / oneDayInMs);

        date.textContent = relativeTimeFormat.format(-daysSincePublish, 'day');
      }
    });
  }

  function isDateTimeFormatSupported() {
    return typeof Intl.DateTimeFormat === 'function';
  }

  function isRelativeTimeFormatSupported() {
    return typeof Intl.RelativeTimeFormat === 'function';
  }

  function toKm(distance) {
    return (distance / 1000).toFixed(2);
  }

  function toMin(time) {
    let hour = Math.floor(time / 3600);
    let min = Math.floor((time - (hour * 3600)) / 60);
    let sec = time - (hour * 3600) - (min * 60);

    if (min.toString().length === 1) {
      min = `0${min}`;
    }
    
    if (sec.toString().length === 1) {
      sec = `0${sec}`;
    }

    if (hour) {
      return `${hour}:${min}:${sec}`;
    }

    return `${min}:${sec}`;
  }
      
  function getLatestActivity() {
    const url = "https://dzhstravaapp.azurewebsites.net/api/Activities";
    const tenSecondsInTicks = 10 * 1000;

    timeoutId = setTimeout(() => {
      stravaCardBody.innerHTML = showSlowRequestMessage();
    }, tenSecondsInTicks);

    return fetch(url)
      .then(response => response.json())
      .then(response => response[0]);
  }

  function showSlowRequestMessage() {
    return `
      <p>
        <small>Oh, no! The request is running slow*...<br>
        <strong>Not me, though! Wait and see!</strong> 🏃</small>
      </p>
      <p class="azure-function-message">
        * It’s actually an Azure Function doing a cold start.
      </p>`
  }

  function showStartFetchingMessage() {
    stravaCardBody.innerHTML = '<p><small>🏃 to get the latest activity...</small></p>';
  }
}());
