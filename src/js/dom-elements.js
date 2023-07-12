import { format } from "date-fns";
import FullMoon from "../moon-phase/full-moon.png";
import NewMoon from "../moon-phase/new-moon.png";
import FirstQuarter from "../moon-phase/first-quarter.png";
import LastQuarter from "../moon-phase/last-quarter.png";
import WaningCrescent from "../moon-phase/waning-crescent.png";
import WaxingCrescent from "../moon-phase/waxing-crescent.png";
import WaningGibbous from "../moon-phase/waning-gibbous.png";
import WaxingGibbous from "../moon-phase/waxing-gibbous.png";
import BlackCatMoon from "../moon-phase/black-cat-moon.png";

const domElements = (() => {
  const currentLocation = document.querySelector(".current-location");
  const day = document.querySelector(".current-day");
  const date = document.querySelector(".full-date");
  const time = document.querySelector(".current-local-time");
  const currentTemp = document.querySelector(".current-temperature");
  const currentImg = document.querySelector(".current-weather-img");
  const moonPhase = document.querySelector(".moon-phase");
  const moonImg = document.querySelector(".moon-phase-icon");
  const feelsLikeDegrees = document.querySelector(".feels-like");
  const descriptiveText = document.querySelector(".descriptive-text");
  const switchUnitBtn = document.querySelector(".switch-checkbox");
  const lastUpdate = document.querySelector(".last-updated");

  const createMainInfoCard = (weather) => {
    currentLocation.textContent = `${weather.location.name}, ${weather.location.country}`;
    const localDateTime = weather.location.localtime;
    console.log(localDateTime);

    const [localDate, localTime] = localDateTime.split(" ");
    console.log(localDate);
    console.log(localTime);
    const fullDate = format(new Date(localDate), "EEEE-do MMM yyyy");
    const [currDay, currentDate] = fullDate.split("-");
    day.textContent = currDay;
    date.textContent = currentDate;
    time.textContent = localTime;
  };

  return { createMainInfoCard };
})();

export default domElements;
