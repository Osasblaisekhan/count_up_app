export default class CounterTimer {
  constructor() {
    this.newYear = '1 january 2025';
    this.second = document.getElementById('second');
    this.minute = document.getElementById('minute');
    this.hour = document.getElementById('hour');
    this.day = document.getElementById('day');
  }

    countingUpTimer = () => {
      const newYearTime = new Date(this.newYear);

      const currentTime = new Date();

      const timeDifference = (currentTime - newYearTime);

      const getSecond = Math.floor(timeDifference / 1000);

      this.second.innerHTML = getSecond;

      const getMinute = Math.floor(getSecond / 60);
      this.minute.innerHTML = getMinute;

      const getHour = Math.floor(getMinute / 60);

      this.hour.innerHTML = getHour;

      const getDay = Math.floor(getHour / 24);

      this.day.innerHTML = getDay;
    }
}
