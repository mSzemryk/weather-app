const input = document.querySelector('input');
const button = document.querySelector('button');
const errorMsg = document.querySelector('.error');
const cityName = document.querySelector('.city_name');
const img = document.querySelector('img');
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
