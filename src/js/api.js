import domElements from "./dom-elements";

const apiData = (() => {
  const form = document.querySelector("form");
  const loader = document.querySelector(".loader");
  const switchUnitBtn = document.querySelector(".switch-checkbox");
  const WAKey = "8095df91194a4c03b96164937232306";
  const GAKey = "ok9Un0m6rvRm9ifbic2wG6Mb2ZlNMmg3";

  const showWeather = async (locationInput) => {
    try {
      loader.classList.remove("hidden");
      let url = `https://api.weatherapi.com/v1/forecast.json?key=${WAKey}&q=${locationInput}&days=2`;
      const response = await fetch(url, { mode: "cors" });
      if (!response.ok) throw new Error(response.statusText);
      const weatherData = await response.json();

      const currentWeather = `${weatherData.current.condition.text.toLocaleLowerCase()} rainbow`;

      let gifSearch = `https://api.giphy.com/v1/gifs/translate?api_key=${GAKey}&s=${currentWeather}`;
      switchUnitBtn.checked = false;
      showGif(gifSearch);
      loader.classList.add("hidden");

      console.log(weatherData);
      domElements.createMainInfoCard(weatherData);
      domElements.createExtraInfoCard(weatherData);
      domElements.createForecastInfoCard(weatherData);
    } catch (error) {
      loader.classList.add("hidden");
      if (error.message !== "NOT FOUND" && locationInput === "") {
        alert(`Please add a location 🌈`);
      } else if (error.message !== "NOT FOUND") {
        alert(`Sorry, we couldn't find '${locationInput}'`);
      } else {
        alert(error);
      }
    }
  };

  const randomGif = document.querySelector(".random-gif");
  const errorGif = document.querySelector(".error-gif");
  async function showGif(url) {
    try {
      const response = await fetch(url, { mode: "cors" });
      if (!response.ok) throw new Error(response.statusText);
      const gif = await response.json();
      randomGif.src = gif.data.images.original.url;
    } catch (error) {
      console.log(error);
      errorGif.textContent = error;
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const locationInput = document.querySelector("#location");
    showWeather(locationInput.value);
    locationInput.value = "";
  });

  return { showWeather };
})();

export default apiData;
