import './style.css';

import { displaytime, slide } from './modules/timeDisplay.js';

import CounterTimer from './modules/counter.js';

displaytime();

slide();

const dom = new CounterTimer();

setInterval(() => {
  dom.countingUpTimer();
});