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

  // Mapping between weather conditions and corresponding image URLs
  const weatherImages: { [key: string]: string } = {
    Rain: 'https://images.unsplash.com/uploads/141362941583982a7e0fc/abcfbca1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbiUyMGNsb3Vkc3xlbnwwfHwwfHx8MA%3D%3D',
    Clear: 'https://media.istockphoto.com/id/947314334/photo/blue-sky-with-bright-sun.webp?b=1&s=170667a&w=0&k=20&c=RAwzZwSmL8xD2SvUcS584Rs0vRqEiE8D9L73Vta_ADQ=',
    Clouds: '/weather-images/clouds.jpg'// Add more weather conditions and corresponding image URLs as needed
  };

  return (
    <main className={`flex min-h-screen flex-col items-center text-black gap-20 p-3`}>
      <header className={'bg-red'}></header>
      <div className={'flex flex-col gap-10 rounded-lg border-black border-8 p-5 bg-slate-500 items-center'}>
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
          <div className='flex flex-col items-center rounded-lg bg-slate-300 p-3 '>
            <h2 className='text-xl font-bold'>Weather for {city}</h2>
            <p>Main: {data.weather[0].main} - {data.weather[0].description}</p>
            <Image
            src={weatherImages[data.weather[0].main]}
            alt={data.weather[0].main}
            width={20}
            height={20} /> {/* Display weather image */}
            <p>Temp: {data.main.temp} °C</p>
            <p>Wind speed: {data.wind.speed} meter/sec</p>
            <p>Last Updated: {new Date(data.dt * 1000).toLocaleTimeString()}</p>
          </div>
        )}
        <Link href='/forecast'>
          <button className="btn btn-outline btn-secondary hover:scale-110 transition-transform">See 5 day forecast</button>
        </Link>
      </div>
      <footer></footer>
    </main>
  );
}