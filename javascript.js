const apiKey = "4145e20d54efe66b564e9351fbbd9af0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);
    console.log(response);

    const exisistingError = document.querySelector(".error-message");

    if (response.status == 200) {

        const displayWeather = document.querySelector(".weather");
        displayWeather.classList.toggle("weather");

        if(exisistingError) {
            exisistingError.parentElement.removeChild(exisistingError);
        }

    } else if (response.status == 404) {

        const searchContainer = document.querySelector(".search-container"); 

        if(!exisistingError) {

            const div = document.createElement("div");
            const errorMessage = document.createElement("p");
            errorMessage.classList.add("error-message");
            errorMessage.textContent = "Please enter a valid city name";
        
            div.appendChild(errorMessage);
            searchContainer.after(div);
        }

    };


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

        if (data.weather[0].description == 'clear sky') {
            weatherIcon.setAttribute("src", "images/clear-sky.png");
        } else if (data.weather[0].description == 'few clouds') {
            weatherIcon.setAttribute("src", "images/few-clouds.png");
        } else if (data.weather[0].description == 'broken clouds' || data.weather[0].description == 'overcast clouds') {
            weatherIcon.setAttribute("src", "images/broken-clouds.png");
        } else if (data.weather[0].description == 'scattered clouds') {
            weatherIcon.setAttribute("src", "images/scattered-clouds.png");
        } else if (['mist', 'smoke', 'haze', 'sand/dust whirls', 'fog', 'sand', 'dust', 'volcanic ash', 'squalls', 'tornado'].includes(data.weather[0].description)) {
            weatherIcon.setAttribute("src", "images/haze.png");
        } else if (data.weather[0].main == 'Snow') {
            weatherIcon.setAttribute("src", "images/snow.png");
        } else if (['moderate rain', 'heavy intensity rain', 'very heavy rain', 'extreme rain',
             'freezing rain', 'light intensity shower rain', 'shower rain', 
             'heavy intensity shower rain', 'ragged shower rain'].includes(data.weather[0].description)) {
                weatherIcon.setAttribute("src", "images/rain.png");
        } else if (data.weather[0].description == 'light rain' || data.weather[0].main == 'Drizzle') {
            weatherIcon.setAttribute("src", "images/light-rain");
        } else if (data.weather[0].main == 'Thunderstorm') {
            weatherIcon.setAttribute("src", "images/thunderstorm.png");
        }
    };

    changeIcon();
};


const cityInput = document.querySelector(".input");
const searchBtn = document.querySelector(".search-button");

searchBtn.addEventListener("click", () => {
   
    checkWeather(cityInput.value);

});

