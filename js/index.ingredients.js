const clockContainer = document.querySelector('.ingredients__clock');

if (clockContainer) {
  function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('uk', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    clockContainer.innerText = timeString;

    const delay = 1000 - now.getMilliseconds();
    setTimeout(updateClock, delay);
  }

  updateClock();
}
