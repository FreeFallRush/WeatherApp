import { format } from "date-fns";
import FullMoon from "../img/moon-phase/full-moon.png";
import NewMoon from "../img/moon-phase/new-moon.png";
import FirstQuarter from "../img/moon-phase/first-quarter.png";
import LastQuarter from "../img/moon-phase/last-quarter.png";
import WaningCrescent from "../img/moon-phase/waning-crescent.png";
import WaxingCrescent from "../img/moon-phase/waxing-crescent.png";
import WaningGibbous from "../img/moon-phase/waning-gibbous.png";
import WaxingGibbous from "../img/moon-phase/waxing-gibbous.png";
import BlackCatMoon from "../img/moon-phase/black-cat-moon.png";

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
  };

  return { createMainInfoCard };
})();
