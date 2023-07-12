const handlers = (() => {
  const extraInfoBtn = document.querySelector(".extra-info-btn");
  const extraInfoSection = document.querySelector(".extra-info-card");
  const closeExtraInfoBtn = document.querySelector(".close-extra-info-btn");

  const forecastInfoBtn = document.querySelector(".forecast-btn");
  const forecastInfoSection = document.querySelector(".forecast-info-card");
  const closeForecastBtn = document.querySelector(".close-forecast-btn");

  const gifBtn = document.querySelector(".gif-btn");
  const gifSection = document.querySelector(".random-gif-card");
  const closeGifBtn = document.querySelector(".close-gif-btn");

  const openExtraInfo = () => {
    extraInfoBtn.addEventListener("click", () => {
      extraInfoSection.classList.remove("hidden");
      forecastInfoSection.classList.add("hidden");
      gifSection.classList.add("hidden");
    });
  };

  const closeExtraInfo = () => {
    closeExtraInfoBtn.addEventListener("click", () => {
      extraInfoSection.classList.add("hidden");
    });
  };

  const openForecastInfo = () => {
    forecastInfoBtn.addEventListener("click", () => {
      forecastInfoSection.classList.remove("hidden");
      extraInfoSection.classList.add("hidden");
      gifSection.classList.add("hidden");
    });
  };

  const closeForecastInfo = () => {
    closeForecastBtn.addEventListener("click", () => {
      forecastInfoSection.classList.add("hidden");
    });
  };

  const openGifSection = () => {
    gifBtn.addEventListener("click", () => {
      gifSection.classList.remove("hidden");
      extraInfoSection.classList.add("hidden");
      forecastInfoSection.classList.add("hidden");
    });
  };

  const closeGifSection = () => {
    closeGifBtn.addEventListener("click", () => {
      gifSection.classList.add("hidden");
    });
  };

  return {
    openExtraInfo,
    closeExtraInfo,
    openForecastInfo,
    closeForecastInfo,
    openGifSection,
    closeGifSection,
  };
})();

export default handlers;
