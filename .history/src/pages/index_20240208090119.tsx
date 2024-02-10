import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState('');

  const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';
  const GEOCODE_API_KEY = 'YOUR_GEOCODING_API_KEY';

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
      );
      setWeatherData(response.data);
      setError('');
    } catch (error) {
      setWeatherData(null);
      setError('Location not found. Please try again.');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={location}
        onChange={handleChange}
        placeholder="Enter location"
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p>{error}</p>}
      {weatherData && (
        <div>
          <h2>Weather in {weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          {/* Add more weather data fields as needed */}
        </div>
      )}
    </div>
  );
};

export default Home;