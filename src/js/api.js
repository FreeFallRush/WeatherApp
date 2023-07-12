import domElements from "./dom-elements";

const apiData = (() => {
  const form = document.querySelector("form");
  const loader = document.querySelector(".loader");
  const switchUnitBtn = document.querySelector(".switch-checkbox");
  const WAKey = "8095df91194a4c03b96164937232306";
  const GAKey = "ok9Un0m6rvRm9ifbic2wG6Mb2ZlNMmg3";

  const showWeather = async (locationInput) => {
    let url = `https://api.weatherapi.com/v1/forecast.json?key=${WAKey}&q=${locationInput}&days=2`;
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) throw new Error(response.statusText);
    const weatherData = await response.json();

    console.log(weatherData);
    domElements.createMainInfoCard(weatherData);
    domElements.createExtraInfoCard(weatherData);
    domElements.createForecastInfoCard(weatherData);
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const locationInput = document.querySelector("#location");
    showWeather(locationInput.value);
    locationInput.value = "";
  });

  return { showWeather };
})();

export default apiData;
