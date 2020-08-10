const root = document.documentElement;
const deg = 6;

const time = () => {
  const day = new Date();
  const hr = day.getHours() * 30;
  const min = day.getMinutes() * deg;
  const sec = day.getSeconds() * deg;
  
  root.style.setProperty('--rotateZ-hr', `rotateZ(${hr + min / 12}deg)`);
  root.style.setProperty('--rotateZ-min', `rotateZ(${min}deg)`);
  root.style.setProperty('--rotateZ-sec', `rotateZ(${sec}deg)`);
};

time();
setInterval(time, 1000);