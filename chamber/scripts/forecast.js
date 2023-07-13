const apiKey = '07ddd8fea3109732c67aae4f838aade9';
const latitude = 51.0501100;
const longitude = -114.0852900;

const APIurl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

const forecastGrid = document.getElementById('forecast-grid');

fetch(APIurl)
  .then(response => response.json())
  .then(data => {
    const forecastData = data.list;

    const groupedData = {};
    forecastData.forEach(forecast => {
      const date = forecast.dt_txt.split(' ')[0];
      if (!groupedData[date]) {
        groupedData[date] = forecast;
      }
    });

    let counter = 0;
    Object.keys(groupedData).forEach(date => {
      if (counter >= 3) {
        return;
      }

      const forecast = groupedData[date];

      const forecastCard = document.createElement('div');
      forecastCard.classList.add('forecast-card');

      const dateElement = document.createElement('p');
      dateElement.textContent = getDayName(date);
      dateElement.classList.add('headline');
      forecastCard.appendChild(dateElement);

      const temperature = document.createElement('p');
      temperature.textContent = Math.round(forecast.main.temp) + '°F';
      forecastCard.appendChild(temperature);


      const weatherIconSpan = document.createElement('span');
      let weatherIcon = forecast.weather[0].icon;
      weatherIconSpan.innerHTML = `<img class="weather-forcast-img" alt="${temperature.textContent}" src="https://openweathermap.org/img/w/${weatherIcon}.png">`;
      forecastCard.appendChild(weatherIconSpan);

      forecastGrid.appendChild(forecastCard);

      counter++;
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });

function getDayName(dateString) {
  const date = new Date(dateString);
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[date.getDay()];
}










