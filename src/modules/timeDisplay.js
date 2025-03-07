export const displaytime = (time) => {
  const prop = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  return time?.toLocaleString('en-US', prop);
};

setInterval(() => {
  const d = new Date();
  document.getElementById('time-date').innerHTML = displaytime(d);
});

export const slide = () => {
  const marquee = document.getElementById('scroll');
  marquee.innerHTML = '<h1 id="khan-tech">welcome to khan tech counter-up timer</h1>';
};