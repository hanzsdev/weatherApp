const apiKey = "4145e20d54efe66b564e9351fbbd9af0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);

    const cityName = document.querySelector(".city");
    cityName.innerHTML = data.name;

    const temp = document.querySelector(".temp");
    temp.innerHTML = Math.round(data.main.temp) + "°C";

    const humidity = document.querySelector(".humidity");
    humidity.innerHTML = Math.round(data.main.humidity) + " %";

    const windSpeed = document.querySelector(".wind");
    windSpeed.innerHTML = Math.round(data.wind.speed) + " Km/h";

    const weatherIcon = document.querySelector(".weather-icon");
    
    console.log(data.weather[0].description);

    function changeIcon () {

        if (data.weather[0].main == 'Clear sky') {
            weatherIcon.setAttribute("src", "images/clear-sky.png");
        } else if (data.weather[0].description == 'Clouds') {
            weatherIcon.setAttribute("src", "images/few-clouds.png");
        } else if (data.weather[0].description == 'broken clouds' || data.weather[0].description == 'overcast clouds') {
            weatherIcon.setAttribute("src", "images/broken-clouds.png")
        } else if (data.weather[0].description == 'scattered clouds') {
            weatherIcon.setAttribute("src", "images/scattered-clouds.png")
        } 
    };

    changeIcon();
};

const cityInput = document.querySelector(".input");
const searchBtn = document.querySelector(".search-button");

searchBtn.addEventListener("click", () => {
    
    checkWeather(cityInput.value);

});

