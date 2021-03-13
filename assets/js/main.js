// @ts-check
(function () {
  'use strict';

  const stravaCardBody = document.querySelector('.strava-card-body');
  const yearlyGoalInKm = 500;
  /**
   * @type {number}
   */
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

        const hasPhoto = !!response.photoUrl;

        const photoClass = hasPhoto ? 'has-photo' : '';
        const inlineStyle = hasPhoto ? `background-image: linear-gradient(rgba(0, 0, 0, 0.25), transparent 25%, transparent 60%, rgba(0, 0, 0, 0.5)), url('${response.photoUrl}');` : '';

        const template = `
          <div class="latest-run ${photoClass}" style="${inlineStyle}">
            <div class="activity-name">
              <a href="https://www.strava.com/activities/${response.id}" target="_blank" ref="noopener noreferrer">
                ${response.name}
              </a>
            </div>
            <div class="stats">
              <div>
                <span class="label">Distance</span>
                <div>${toKm(response.distance)} km</div>
              </div>
              <div>
                <span class="label">Time</span>
                <div>${formatTime(response.moving_time)} min</div>
              </div>
            </div>
          </div>
          <div class="strava-stats">
            <h4 class="strava-card-title">Year-to-date stats</h4>

            <p>Distance: ${toKm(response.year_to_date_run_total_distance)} km</p>
            <p>Goal: ${yearlyGoalInKm} km</p>
            <p>Progress</p>
            <div class="goal-progress" style="width: ${goalProgress(response.year_to_date_run_total_distance)}" title="${goalProgress(response.year_to_date_run_total_distance)}"></div>
          </div>
        `;

        stravaCardBody.innerHTML = template;
      })
      .catch(() => {
        clearTimeout(timeoutId);

        stravaCardBody.innerHTML = '<p><small>Ouch! The activity request got lost in the Web forest 🌲🌳🌲</small></p>';
      });
  }

  function formatDates() {
    const language = navigator.language;

    /**
     * @type Intl.DateTimeFormatOptions
     */
    const dateTimeOptions = { month: 'long', year: 'numeric', day: 'numeric' };
    const dateTimeFormat = new Intl.DateTimeFormat(language, dateTimeOptions);

    const relativeTimeOptions = { numeric: 'auto' };
    // @ts-ignore
    const relativeTimeFormat = new Intl.RelativeTimeFormat(language, relativeTimeOptions);

    const oneDayInMs = 24 * 60 * 60 * 1000;
    const thirtyDaysInMs = 30 * oneDayInMs;

    const dates = [...document.querySelectorAll('.publish-date, .update-date')];

    dates.forEach(date => {
      const timeSinceDateInMs = new Date().getTime() - new Date(date.textContent).getTime();

      if ((timeSinceDateInMs > thirtyDaysInMs) || !isRelativeTimeFormatSupported()) {
        date.textContent = dateTimeFormat.format(new Date(date.textContent));
      } else {
        const daysSinceDate = Math.floor(timeSinceDateInMs / oneDayInMs);

        date.textContent = relativeTimeFormat.format(-daysSinceDate, 'day');

        if (!isSinglePostPage() && daysSinceDate < 4) {
          date.parentElement.classList.add('published-recently', 'confetti-please');
        }
      }
    });
  }

  function isDateTimeFormatSupported() {
    return typeof Intl.DateTimeFormat === 'function';
  }

  function isRelativeTimeFormatSupported() {
    // @ts-ignore
    return typeof Intl.RelativeTimeFormat === 'function';
  }

  /**
   * @param {number} totalDistanceInMeters
   */
  function toKm(totalDistanceInMeters) {
    const totalKm = convertMetersToKm(totalDistanceInMeters);

    return totalKm.toFixed(2);
  }

  /**
   * @param {number} totalDistanceInMeters
   */
  function goalProgress(totalDistanceInMeters) {
    const totalKm = convertMetersToKm(totalDistanceInMeters);
    const goalProgressInPercentage = (totalKm / yearlyGoalInKm) * 100;

    if (goalProgressInPercentage >= 100) {
      return '100%';
    }

    return `${goalProgressInPercentage.toFixed(2)}%`;
  }

  /**
   * @param {number} distanceInMeters
   */
  function convertMetersToKm(distanceInMeters) {
    const oneKmInMeters = 1000;
    const totalKm = (distanceInMeters / oneKmInMeters);

    return totalKm;
  }

  /**
   * @param {number} totalTimeInSeconds
   */
  function formatTime(totalTimeInSeconds) {
    const oneHourInSeconds = 3600;
    let hours = Math.floor(totalTimeInSeconds / oneHourInSeconds);

    /**
     * @type {number | string}
     */
    let minutes = Math.floor((totalTimeInSeconds - (hours * oneHourInSeconds)) / 60);

    /**
     * @type {number | string}
     */
    let seconds = totalTimeInSeconds - (hours * oneHourInSeconds) - (minutes * 60);

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    if (hours > 0) {
      return `${hours}:${minutes}:${seconds}`;
    }

    return `${minutes}:${seconds}`;
  }

  function getLatestActivity() {
    const url = "https://dzhstravaapp.azurewebsites.net/api/Activities";
    const tenSecondsInTicks = 10 * 1000;

    timeoutId = setTimeout(() => {
      stravaCardBody.innerHTML = showSlowRequestMessage();
    }, tenSecondsInTicks);

    return fetch(url).then(response => response.json());
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

  function isSinglePostPage() {
    return document.body.classList.contains('single-post');
  }

}());
