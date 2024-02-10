import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [currentWeather, setCurrentWeather] = useState<any>();
  const [forecastData, setForecastData] = useState<any>();
  const [city, setCity] = useState('');
  const [searched, setSearched] = useState(false);
  const API_KEY = '5023282192c8832822ba0a7a68a2a33d';

  const fetchCurrentWeather = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    axios.get(url)
      .then((response) => {
        setCurrentWeather(response.data);
        setSearched(true);
      })
      .catch((error) => {
        console.error('Error fetching current weather data:', error);
      });
  };

  const fetchWeatherForecast = () => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;

    axios.get(url)
      .then((response) => {
        setForecastData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching weather forecast:', error);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Location"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={() => {
        fetchCurrentWeather();
        fetchWeatherForecast();
      }}>Search</button>

      {searched && currentWeather && (
        <div>
          <h2>Current Weather for {city}</h2>
          <p>Main: {currentWeather.weather[0].main}</p>
          <p>Description: {currentWeather.weather[0].description}</p>
          <p>Temperature: {currentWeather.main.temp}</p>
        </div>
      )}

      {forecastData && (
        <div>
          <h2>5-Day Forecast for {city}</h2>
          <p> {forecastData.sun.sunrise}</p>
        </div>
      )}
    </div>
  );
}