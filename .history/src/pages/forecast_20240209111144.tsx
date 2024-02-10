import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useEffect } from 'react';

interface ForecastData {
  dt: number;
  main: {
    temp: number;
  };
  weather: {
    main: string;
    description: string;
  }[];
  wind: {
    speed: number;
  };
}

export default function Home() {
  const [data, setData] = useState<ForecastData[]>([]);
  const [city, setCity] = useState('');
  const [searched, setSearched] = useState(false);
  const API_KEY = '5023282192c8832822ba0a7a68a2a33d';

  useEffect(() => {
    fetchCurrentWeather();
  }, []);

  const fetchCurrentWeather = () => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

    axios.get(url)
      .then((response) => {
        setData(response.data.list);
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
      <button onClick={fetchCurrentWeather}>Search</button>

      {searched && data && (
        <div>
          <h2>Weather for {city}</h2>
          {data.map((forecast, index) => (
            <div key={index}>
              <p>Date: {new Date(forecast.dt * 1000).toLocaleDateString()}</p>
              <p>Main: {forecast.weather[0].main}</p>
              <p>Description: {forecast.weather[0].description}</p>
              <p>Temp: {forecast.main.temp} °C</p>
              <p>Wind speed: {forecast.wind.speed} meter/sec</p>
            </div>
          ))}
        </div>
      )}

      <Link href='/forecast'><button>See 5 day forecast</button></Link>
    </div>
  );
}