const apiKey = "4145e20d54efe66b564e9351fbbd9af0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=paris";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);

    const cityName = document.querySelector(".city");
    cityName.innerHTML = data.name;

    const temp = document.querySelector(".temp");
    temp.innerHTML = Math.floor(data.main.temp) + "°C";

    const humidity = document.querySelector(".humidity");
    humidity.innerHTML = Math.floor(data.main.humidity) + " %";

    const windSpeed = document.querySelector(".wind");
    windSpeed.innerHTML = Math.floor(data.wind.speed) + " Km/h";
};

checkWeather();