import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState('');

  const API_KEY = '5023282192c8832822ba0a7a68a2a33d';

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

  const GrabWeather = () => {
    axios.get(url)
    .then((response) => {
      console.clear();
      setWeatherData(response.data)
      console.log(response.data);
    }).catch(err => {
      console.log(err);
    })
  }

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