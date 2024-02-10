import React from 'react';
import { useRouter } from 'next/router';

const WeatherInfo = ({ weatherData }: { weatherData: any }) => {
  const router = useRouter();

  return (
    <div>
      <h1>Weather Information</h1>
      {weatherData && (
        <div>
          <h2>Weather in {weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          {/* Add more weather data fields as needed */}
        </div>
      )}
      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
};

export default WeatherInfo;