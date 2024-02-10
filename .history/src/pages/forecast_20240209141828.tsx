import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Forecast() {
  const [data, setData] = useState<any>();
  const [city, setCity] = useState('');
  const [searched, setSearched] = useState(false);
  const API_KEY = '5023282192c8832822ba0a7a68a2a33d';

  const fetchWeatherForecast = () => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

    axios.get(url)
      .then((response) => {
        setData(response.data);
        setSearched(true);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  };

  const getDayOfWeek = (date: string) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = new Date(date).getDay();
    return days[dayIndex];
  };

  return (
    <main className={`flex min-h-screen flex-col items-center text-black gap-20 p-10`}>
        <div className={'flex flex-col gap-5'}>
            <input
            className={'rounded-lg border-black border-8 p-3'}
                type="text"
                placeholder="Enter Location"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={fetchWeatherForecast} className={'rounded-lg bg-emerald-500 p-3 '}>Search</button>
            </div>
      {searched && data && (
        <div className={'flex flex-col items-center gap-10 rounded-lg border-black border-8 p-5 bg-slate-500'}>
          <h2 className={'font-bold text-2xl'}>Forecast for {city}</h2>
          {data.list.slice(0, 5).map((forecast: any, index: number) => (
            <div key={index} className={'rounded-lg p-3 bg-slate-300'}>
              <p className='text-xl'>{getDayOfWeek(forecast.dt_txt)}</p>
              <p>Weather: {forecast.weather[0].main} - {forecast.weather[0].description}</p>
              <p>Temperature: {forecast.main.temp} °C</p>
              <p>Wind speed: {forecast.wind.speed} meter/sec</p>
            </div>
          ))}
          <Link href='/'><button className='rounded-lg bg-emerald-500 p-3 '>Go Back</button></Link>
        </div>
      )}
    </main>
  );
}