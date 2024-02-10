import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link'

export default function Forecast() {
  const [data, setData] = useState<any>();
  const [city, setCity] = useState('');
  const [searched, setSearched] = useState(false);
  const API_KEY = '5023282192c8832822ba0a7a68a2a33d';

  const fetchWeatherForecast = () => {
    const url = `https://api.openweathermap.org/data/2.5/forecast${city}&appid=${API_KEY}&units=metric`;

    axios.get(url)
      .then((response) => {
        setData(response.data);
        setSearched(true);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
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
      <button onClick={fetchWeatherForecast}>Search</button>

      {searched && data && (
        <div>
          <h2>Forecast for {city}</h2>
          <p>Main: {data.list.main.temp}</p>
          <p>Description: {data.weather[0].description}</p>
          <p>Temp: {data.main.temp} °C</p>
          <p>Wind speed: {data.wind.speed} meter/sec</p>
        </div>
      )}

    </div>

    
  );
}