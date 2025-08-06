const hoursElement = document.querySelector("#hours");
const minutesElement = document.querySelector("#minutes");
const secondsElement = document.querySelector("#seconds");
const meridianElement = document.querySelector("#meridian");

const dayElement = document.querySelector("#day");
const dateElement = document.querySelector("#date");
const monthElement = document.querySelector("#month");
const yearElement = document.querySelector("#year");

let time = new Date();

function obtainTime() {
  time = new Date();

  const hours = time.getHours() % 12 || 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const meridian = time.getHours() >= 12 ? "PM" : "AM";

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return {
    hours: formattedHours,
    minutes: formattedMinutes,
    seconds: formattedSeconds,
    meridian,
  };
}

function obtainDay() {
  const days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const day = days[time.getDay()];
  const date = time.getDate();
  const month = months[time.getMonth()];
  const year = time.getFullYear();

  return { day, date, month, year };
}

function updateClock() {
  const { hours, minutes, seconds, meridian } = obtainTime();
  const { day, date, month, year } = obtainDay();

  updateTime(hours, minutes, seconds, meridian);
  updateDay(day, date, month, year);
}

function updateTime(hours, minutes, seconds, meridian) {
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
  meridianElement.textContent = meridian;
}

function updateDay(day, date, month, year) {
  dayElement.textContent = day;
  dateElement.textContent = String(date).padStart(2, "0");
  monthElement.textContent = month;
  yearElement.textContent = year;
}

const milliseconds = time.getMilliseconds();

updateClock();

setTimeout(() => {
  updateClock();

  setInterval(updateClock, 1000);
}, 1000 - milliseconds);
