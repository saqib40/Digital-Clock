let heading = document.querySelector('h1');

function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  
  let AmPm = 'AM';
  if (hour > 12) {
    hour -= 12;
    AmPm = 'PM';
  }
  if (hour == 0) {
    hour = 12;
    AmPm = 'AM';
  }
  
  hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
  heading.textContent = hour + ':' + min + ':' + sec + ' ' + AmPm;
}

setInterval(showTime, 1000);
