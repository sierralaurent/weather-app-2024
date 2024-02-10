import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image'
import 'tailwindcss/tailwind.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Home() {
  const [data, setData] = useState<any>();
  const [city, setCity] = useState('');
  const [searched, setSearched] = useState(false);
  const API_KEY = '5023282192c8832822ba0a7a68a2a33d';

  const fetchCurrentWeather = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setSearched(true);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  };

  const weatherImages: { [key: string]: string } = {
    Rain: '',
    Clear: '',
    Clouds: '/weather-images/clouds.jpg',
    Sunny: '',
    Snow: '',

  };

  return (
    <>
    <Header />
    <main className={`flex min-h-screen flex-col items-center text-black gap-20 p-3`}>
      <div className={'flex flex-col gap-10  p-5 pt-40 items-center'}>
        <input
          className="input input-bordered input-accent w-full max-w-xs text-white"
          type="text"
          placeholder="Enter Location"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchCurrentWeather} className={'btn btn-outline btn-secondary hover:scale-110 transition-transform'}>
          Search Current Weather
        </button>

        {searched && data && (
          <div className='flex flex-col items-center rounded-lg bg-slate-300 p-10 '>
            <h2 className='text-xl font-bold'>Weather for {city}</h2>
            <Image
            src={weatherImages[data.weather[0].main]}
            alt={data.weather[0].main}
            width={40}
            height={40} /> 
            <p>{data.weather[0].main} - {data.weather[0].description}</p>
            <p>Temp: {data.main.temp} °C</p>
            <p>Wind speed: {data.wind.speed} meter/sec</p>
            <p>Last Updated: {new Date(data.dt * 1000).toLocaleTimeString()}</p>
          </div>
        )}
        <Link href='/forecast'>
          <button className="btn btn-outline btn-secondary hover:scale-110 transition-transform">See 5 day forecast</button>
        </Link>
      </div>
    </main>
    <Footer />
    </>
  );
}