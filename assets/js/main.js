(function () {
  'use strict';

  const stravaCardBody = document.querySelector('.strava-card .card-body');

  showStartFetchingMessage();

  getLatestActivity()
    .then(response => response[0])
    .then(response => {
      const template = `
        <h4>Latest run</h4>
        <div class="latest-run">
          <a href="https://www.strava.com/activities/${response.id}" target="_blank">
            ${response.name}
          </a>
          <div class="stats">
            <div>
              <span class="label">Distance</span>
              <div>${toKm(response.distance)} km</div>
            </div>
            <div>
              <span class="label">Time</span>
              <div>${toMin(response.moving_time)} min</div>
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
    const min = Math.floor(time / 60);
    const sec = time - min * 60;

    return `${min}:${sec}`;
  }
      
  function getLatestActivity() {
    const url = "https://dzhstravaapp.azurewebsites.net/api/Activities";

    return fetch(url).then(response => response.json());
  }

  function showStartFetchingMessage() {
    stravaCardBody.innerHTML = '<p><small>Fetching latest activity...</small></p>';
  }
}());
