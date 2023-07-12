import "./style.css";
import handlers from "./js/handlers";
import apiData from "./js/api";

handlers.openExtraInfo();
handlers.closeExtraInfo();
handlers.openForecastInfo();
handlers.closeForecastInfo();
handlers.openGifSection();
handlers.closeGifSection();

apiData.showWeather("Bucharest");
