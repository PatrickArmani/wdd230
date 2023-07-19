const apiKey = '07ddd8fea3109732c67aae4f838aade9';
const latitude = 33.057080;
const longitude = -117.189480;


function fetchWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      displayWeatherData(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function displayWeatherData(data) {
  const weatherInfoElement = document.getElementById('weather-info');

  const cityName = data.name;
  const temperatureFahrenheit = data.main.temp;
  const humidity = data.main.humidity;
  const weatherIcon = data.weather[0].icon;
  const windspeed = data.wind.speed;
  const description = data.weather[0].description;
  const words = description.split(" ");
  const capitalizedWords = words.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  const capitalizedDescription = capitalizedWords.join(" ");

  const htmlContent = `
    <span class="weather-headline">${city} Weather</span>
    <img class="weather-img" alt="Weather icon" src="https://openweathermap.org/img/wn/${weatherIcon}.png">
    <span class="weather-temp">${temperatureFahrenheit.toFixed(1)}°F</span>
    <span class="weather-description">${capitalizedDescription}</span>
    <span class="weather-humidity">Humidity: ${humidity}</span>
  `;

  weatherInfoElement.innerHTML = htmlContent;
}

const city = 'Carlsbad'; 
fetchWeatherData(city);
