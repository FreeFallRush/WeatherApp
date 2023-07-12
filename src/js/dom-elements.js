import { formatInTimeZone } from "date-fns-tz";
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

  const humidity = document.querySelector("#humidity-text");
  const cloudiness = document.querySelector("#cloudiness-text");
  const rainfall = document.querySelector("#rainfall-text");
  const snowfall = document.querySelector("#snowfall-text");
  const uvIndex = document.querySelector("#uv-index-text");
  const windSpeed = document.querySelector("#wind-speed-text");
  const pressure = document.querySelector("#pressure-text");
  const visibility = document.querySelector("#visibility-text");

  const forecastDayText = document.querySelector(".forecast-day");
  const forecastDateText = document.querySelector(".forecast-full-date");
  const minTemp = document.querySelector(".forecast-min-temperature");
  const maxTemp = document.querySelector(".forecast-max-temperature");
  const forecastImg = document.querySelector(".forecast-weather-img");
  const forecastDesc = document.querySelector(".forecast-description");
  const forecastRain = document.querySelector(".forecast-rain");
  const forecastMoonPhase = document.querySelector(".forecast-moon-phase");
  const forecastMoonPhaseImg = document.querySelector(
    ".forecast-moon-phase-img"
  );
  const sunrise = document.querySelector(".sunrise");
  const sunset = document.querySelector(".sunset");

  const createMainInfoCard = (weather) => {
    currentLocation.textContent = `${weather.location.name}, ${weather.location.country}`;
    const currentDateTime = formatInTimeZone(
      new Date(),
      `${weather.location.tz_id}`,
      "EEEE-do MMM yyyy-HH:mm"
    );
    const [currDay, currentDate, currentTime] = currentDateTime.split("-");
    day.textContent = currDay;
    date.textContent = currentDate;
    time.textContent = currentTime;

    const roundedTempC = Math.round(weather.current.temp_c);
    const roundedTempF = Math.round(weather.current.temp_f);
    currentTemp.textContent = `${roundedTempC}°C`;

    currentImg.src = `https://${weather.current.condition.icon}`;
    currentImg.alt = "weather-icon";

    const moonPhaseText = weather.forecast.forecastday[0].astro.moon_phase;
    moonPhase.textContent = moonPhaseText;
    moonImg.src = getMoonPhaseImg(moonPhaseText);
    moonImg.alt = `moon phase ${moonPhaseText} icon`;

    const roundedFeelsLikeC = Math.round(weather.current.feelslike_c);
    const roundedFeelsLikeF = Math.round(weather.current.feelslike_f);
    feelsLikeDegrees.textContent = `Feels like: ${roundedFeelsLikeC}°C`;
    descriptiveText.textContent = weather.current.condition.text;

    switchUnitBtn.addEventListener("click", () => {
      if (switchUnitBtn.checked === true) {
        currentTemp.textContent = `${roundedTempF}°F`;
        feelsLikeDegrees.textContent = `Feels like: ${roundedFeelsLikeF}°F`;
      } else if (switchUnitBtn.checked === false) {
        currentTemp.textContent = `${roundedTempC}°C`;
        feelsLikeDegrees.textContent = `Feels like: ${roundedFeelsLikeC}°C`;
      }
    });

    const lastUpdatedDateTime = weather.current.last_updated;
    console.log(lastUpdatedDateTime);
    const [lastUpdatedDate, lastUpdatedTime] = lastUpdatedDateTime.split(" ");

    const formattedlastUpdated = format(
      new Date(lastUpdatedDate),
      "do MMM yyyy"
    );
    lastUpdate.textContent = `Last Updated on: ${formattedlastUpdated}  @ ${lastUpdatedTime}`;
  };

  const createExtraInfoCard = (weather) => {
    humidity.textContent = `Humidity: ${weather.current.humidity}%`;
    cloudiness.textContent = `Cloudiness: ${weather.current.cloud}%`;
    rainfall.textContent = `Chance of Rain: ${weather.forecast.forecastday[0].day.daily_chance_of_rain}%`;
    snowfall.textContent = `Chance of Snow: ${weather.forecast.forecastday[0].day.daily_chance_of_snow}%`;
    uvIndex.textContent = `UV Index: ${weather.current.uv}`;
    windSpeed.textContent = `Wind Speed: ${weather.current.wind_kph}km/h`;
    pressure.textContent = `Pressure: ${weather.current.pressure_mb}hPa`;
    visibility.textContent = `Visibility: ${weather.current.vis_km}km`;
  };

  const createForecastInfoCard = (weather) => {
    const forecastFulldate = weather.forecast.forecastday[1].date;
    console.log(forecastFulldate);
    const formattedForecast = format(
      new Date(forecastFulldate),
      "EEEE-do MMM yyyy"
    );
    console.log(formattedForecast);
    const [forecastDay, forecastDate] = formattedForecast.split("-");
    forecastDayText.textContent = forecastDay;
    forecastDateText.textContent = forecastDate;
    forecastImg.src = `https://${weather.forecast.forecastday[1].day.condition.icon}`;
    forecastDesc.textContent =
      weather.forecast.forecastday[1].day.condition.text;
    const roundedMinTempC = Math.round(
      weather.forecast.forecastday[1].day.mintemp_c
    );
    const roundedMinTempF = Math.round(
      weather.forecast.forecastday[1].day.mintemp_f
    );
    minTemp.textContent = `Min Temp: ${roundedMinTempC}°C`;
    const roundedMaxTempC = Math.round(
      weather.forecast.forecastday[1].day.maxtemp_c
    );
    const roundedMaxTempF = Math.round(
      weather.forecast.forecastday[1].day.maxtemp_f
    );
    maxTemp.textContent = `Max Temp: ${roundedMaxTempC}°C`;
    forecastRain.textContent = `Chance of Rain: ${weather.forecast.forecastday[1].day.daily_chance_of_rain}%`;

    const forecastMoonPhaseText =
      weather.forecast.forecastday[1].astro.moon_phase;
    forecastMoonPhase.textContent = forecastMoonPhaseText;

    forecastMoonPhaseImg.src = getMoonPhaseImg(forecastMoonPhaseText);
    forecastMoonPhaseImg.alt = `moon phase ${forecastMoonPhaseText} icon`;

    sunrise.textContent = `Sunrise: ${weather.forecast.forecastday[1].astro.sunrise}`;
    sunset.textContent = `Sunset: ${weather.forecast.forecastday[1].astro.sunset}`;

    switchUnitBtn.addEventListener("click", () => {
      if (switchUnitBtn.checked === true) {
        minTemp.textContent = `Min Temp: ${roundedMinTempF}°F`;
        maxTemp.textContent = `Max Temp: ${roundedMaxTempF}°F`;
      } else if (switchUnitBtn.checked === false) {
        minTemp.textContent = `Min Temp: ${roundedMinTempC}°C`;
        maxTemp.textContent = `Max Temp: ${roundedMaxTempC}°C`;
      }
    });
  };
  const getMoonPhaseImg = (text) => {
    if (text === "Full Moon") {
      return FullMoon;
    } else if (text === "New Moon") {
      return NewMoon;
    } else if (text === "First Quarter") {
      return FirstQuarter;
    } else if (text === "Last Quarter") {
      return LastQuarter;
    } else if (text === "Waning Crescent") {
      return WaningCrescent;
    } else if (text === "Waxing Crescent") {
      return WaxingCrescent;
    } else if (text === "Waning Gibbous") {
      return WaningGibbous;
    } else if (text === "Waxing Gibbous") {
      return WaxingGibbous;
    } else {
      return BlackCatMoon;
    }
  };

  return { createMainInfoCard, createExtraInfoCard, createForecastInfoCard };
})();

export default domElements;
