# Weather-App

Weather App- The Odin Project Exercise

Project: Weather App - from The Odin Project Curriculum -> Path (https://www.theodinproject.com/lessons/node-path-javascript-weather-app)

---> [view project](https://freefallrush.github.io/WeatherApp/) <----

The project asks to create a weather forecast site using the weather API from https://www.weatherapi.com/

Because the Weather API displays only 3 days for forecast(current included), for the free subscriptions, I decided to show only tomorrow's forecast.

Instead of changing the background to show the weather in each location, I chose to use the Giphy API also and search for random gifs based on the weather data text description fetched from the weather API.

To show the current local date and time I used for the first time the date-fns-tz library(find it more accurate than using the API localtime, the time was always behind), which made it very easy.

[![weatherapp.gif](https://i.postimg.cc/Bv34wvBw/weatherapp.gif)](https://postimg.cc/9DL6DCSG)
