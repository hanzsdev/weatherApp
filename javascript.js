const apiKey = "4145e20d54efe66b564e9351fbbd9af0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=paris";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data.wind.speed);
};

checkWeather();