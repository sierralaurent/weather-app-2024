import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link'
import 'tailwindcss/tailwind.css';

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
    <main className={`flex min-h-screen flex-col items-center text-black gap-20`}>
      <header className={'bg-red'}>
      
      </header>
      <input
        className={'bg-red'}
        type="text"
        placeholder="Enter Location"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchCurrentWeather} className={'bg-red'}>Search Current Weather</button>

      {searched && data && (
        <div className='flex flex-col items-center'>
          <h2 className='text-xl'>Weather for {city}</h2>
          <p>Main: {data.weather[0].main}</p>
          <p>Description: {data.weather[0].description}</p>
          <p>Temp: {data.main.temp} °C</p>
          <p>Wind speed: {data.wind.speed} meter/sec</p>
          <p>Last Updated: {new Date(data.dt * 1000).toLocaleTimeString()}</p>
        </div>
      )}
      <Link href='/forecast'><button className='bg-green p-3 '>See 5 day forecast</button></Link>
      <footer>

      </footer>
    </main>

    
  );
}