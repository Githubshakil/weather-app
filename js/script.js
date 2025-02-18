const apiKey = "aaf921ad9ec1fa8b46db888596d87b29"; // API key for OpenWeatherMap
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; // Base URL for OpenWeatherMap API

const searchBox = document.querySelector(".search input"); // Search input box
const searchBtn = document.querySelector(".search button"); // Search button
const weatherIcon = document.querySelector(".weather-icon"); // Weather icon element

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`); // Fetch weather data from API
    let data = await response.json(); // Parse JSON response

    document.querySelector(".city").innerHTML = data.name; // Display city name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c"; // Display temperature
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; // Display humidity
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"; // Display wind speed

    // Update weather icon based on weather conditions
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    } else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    } else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    } else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    } else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block"; // Display weather information
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value); // Check weather when search button is clicked
});
