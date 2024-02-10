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
    <main className={`flex min-h-screen flex-col items-center text-black gap-20 p-3`}>
      <header className={'bg-red'}>
      
      </header>
      <div className={'flex flex-col gap-10 rounded-lg border-black border-8 p-5 bg-slate-500 items-center'}>
        <input
          className={'rounded-lg border-black border-8 p-3'}
          type="text"
          placeholder="Enter Location"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchCurrentWeather} className={'bg-Sage rounded-lg bg-emerald-500 p-3'}>Search Current Weather</button>

        {searched && data && (
          <div className='flex flex-col items-center rounded-lg bg-slate-300 p-3'>
            <h2 className='text-xl font-bold'>Weather for {city}</h2>
            <p>Main: {data.weather[0].main} - {data.weather[0].description}</p>
            <p>Temp: {data.main.temp} °C</p>
            <p>Wind speed: {data.wind.speed} meter/sec</p>
            <p>Last Updated: {new Date(data.dt * 1000).toLocaleTimeString()}</p>
          </div>
        )}
        <Link href='/forecast'><button className="btn btn-outline btn-accent">See 5 day forecast</button></Link>
      </div>
      <footer>

      </footer>
    </main>

    
  );
}