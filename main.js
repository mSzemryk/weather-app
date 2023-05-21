const input = document.querySelector('input');
const button = document.querySelector('button');
const errorMsg = document.querySelector('.error');
const cityName = document.querySelector('.city_name');
const img = document.querySelector('.weather_icon');
const temperature = document.querySelector('.temperature');
const weatherDesc = document.querySelector('.weather_description');
const feelsLike = document.querySelector('.feels_like');
const windSpeed = document.querySelector('.wind_speed');
const clouds = document.querySelector('.clouds');
const humidity = document.querySelector('.humidity');
const press = document.querySelector('.press');


const apiLink = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey =  '&appid=a2d49474a738a688862e11c9d8974976';
const apiUnits = '&units=metric';
const apiLang = '&lang=pl';

getWeather = () =>{
    const apiCity = input.value;
    const URL = apiLink + apiCity + apiKey + apiUnits + apiLang;

    axios.get(URL).then(response => {
        console.log(response.data);
        cityName.textContent = `${response.data.name}, ${response.data.sys.country}`;
        img.src= `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`;
        temperature.textContent = `${response.data.main.temp} C`;
        weatherDesc.textContent = `${response.data.weather[0].description}`
        feelsLike.textContent = `${response.data.main.feels_like} C`;
        windSpeed.textContent = `${response.data.wind.speed} m/s`;
        clouds.textContent = `${response.data.clouds.all} %`;
        humidity.textContent = `${response.data.main.humidity} %`;
        press.textContent = `${response.data.main.pressure} hPa`;
        errorMsg.textContent = '';
    }).catch(error =>{
        console.log(error);
        if(error.response.data.cod !='200' ) {
        errorMsg.textContent = `${error.response.data.message}`;
        }
        [clouds, windSpeed, humidity, press, feelsLike,temperature, weatherDesc,cityName].forEach(el => {
            el.textContent = '';
        })
        img.src = '';
    }).finally(() => {
        input.value = '';
    });
   
    
}
const getWeatherByEnter = (e) =>{
    if(e.key === 'Enter'){
           getWeather();
    }
}
input.addEventListener('keydown', getWeatherByEnter);
button.addEventListener('click',getWeather);
