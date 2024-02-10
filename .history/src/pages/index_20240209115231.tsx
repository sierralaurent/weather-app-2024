import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link'

export default function Home() {
  const [data, setData] = useState<any>();
  const [city, setCity] = useState('');
  const [searched, setSearched] = useState(false);
  const API_KEY = '5023282192c8832822ba0a7a68a2a33d';

  const fetchCurrentWeather = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

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
    <main>
      <header>
      
      </header>
      <input
        type="text"
        placeholder="Enter Location"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchCurrentWeather}>Search Current Weather</button>

      {searched && data && (
        <div>
          <h2>Weather for {city}</h2>
          <p>Main: {data.weather[0].main}</p>
          <p>Description: {data.weather[0].description}</p>
          <p>Temp: {data.main.temp} °C</p>
          <p>Wind speed: {data.wind.speed} meter/sec</p>
          <p>Last Updated: {new Date(data.dt * 1000).toLocaleTimeString()}</p>
        </div>
      )}
      <Link href='/forecast'><button>See 5 day forecast</button></Link>
      <footer>
        
      </footer>
    </main>

    
  );
}