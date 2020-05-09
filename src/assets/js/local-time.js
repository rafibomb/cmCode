const timZoneCheck = document.querySelectorAll('[data-time-zone]');

if (timZoneCheck) {
  // ---------------
  // functions
  // ---------------

  function setTime() {
    let timelist = document.querySelectorAll('.nav-tabbar-item');

    timelist.forEach((zone) => {
      let timeZone = zone.getAttribute('data-time-zone');
      let localTime = getTimeByZone(timeZone);

      zone.querySelector('.local-time').innerText = localTime.time;
    });
  }

  setInterval(setTime, 1000);

  function getTimeByZone(timeZone) {
    let now = new Date(Date.now());
    let month = now
      .toLocaleDateString('en-US', { timeZone, month: 'long' })
      .substring(0, 3);
    let localDateString = now.toLocaleDateString('en-US', { timeZone });

    let date = new Date(localDateString).getDate();
    let year = new Date(localDateString).getFullYear();
    let customTimeString = date + ' ' + month + ',' + year;

    let time = now
      .toLocaleTimeString('en-US', { timeZone, hour12: false })
      .substring(0, 5);

    console.log('timeZone', timeZone);

    return { date: customTimeString, time };
  }
}
