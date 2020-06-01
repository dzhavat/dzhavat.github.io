(function () {
  'use strict';

  const stravaCardBody = document.querySelector('.strava-card .card-body');
  let timeoutId;

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
      stravaCardBody.innerHTML = '<p><small>Activity failed to load.</small></p>';
    });

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

    timeoutId = setTimeout(() => {
      stravaCardBody.innerHTML = getSlowRequestMessage();
    }, 10 * 1000);

    return fetch(url)
      .then(response => response.json())
      .then(response => response[0]);
  }

  function getSlowRequestMessage() {
    return `
      <p>
        <small>Oh, no! The request is running slow*...<br>
        <strong>Not me, though! Wait and see!</strong> 🏃</small>
      </p>
      <p class="azure-function-message">
        * It's actually an Azure Function trying to do a cold start.
      </p>`
  }

  function showStartFetchingMessage() {
    stravaCardBody.innerHTML = '<p><small>Getting latest activity...</small></p>';
  }
}());
