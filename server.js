const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const weather = require('./data/weather.json');
const PORT = process.env.PORT || 3001;

app.get('/', (request, response) => {
  response.send('this is my first server! I became it');
});
app.get('/weather', (request, response) => {
  // const forcastArr = weather.data.map(weatherObj => new Forecast(weatherObj.datetime, weatherObj.weather.description));
  const forcastArr = weather.data.map(weatherObj => new Forecast(weatherObj));
  // response.json(data);
  response.send(forcastArr);
});
function Forecast(weatherObj) {
  this.date = weatherObj.datetime;
  this.description = `Low of ${weatherObj.low_temp}, high of ${weatherObj.max_temp} with ${weatherObj.weather.description}`;
};

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
