(function () {
  'use strict';

  const stravaCardBody = document.querySelector('.strava-card .card-body');
  let timeoutId;

  showStartFetchingMessage();

  getLatestActivity()
    .then(response => {
      clearTimeout(timeoutId);

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
    let sec = time - min * 60;
    
    if (sec.toString().length === 1) {
      sec = `0${sec}`;
    }

    return `${min}:${sec}`;
  }
      
  function getLatestActivity() {
    const url = "https://dzhstravaapp.azurewebsites.net/api/Activities";

    timeoutId = setTimeout(() => {
      stravaCardBody.innerHTML = '<p><small>Oh, no! The request is running slow...<br> <strong>Not me, though! Wait and see!</strong> 🏃</small></p>';
    }, 10 * 1000);

    return fetch(url)
      .then(response => response.json())
      .then(response => response[0]);
  }

  function showStartFetchingMessage() {
    stravaCardBody.innerHTML = '<p><small>Getting latest activity...</small></p>';
  }
}());
