import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import axios from 'axios'
import { useState } from 'react'

export default function Home() {

  const [data, setData] = useState<any>();

  const APIkey = '5023282192c8832822ba0a7a68a2a33d';
  const [lon, setLon] = useState('');
  const [lat, setLat] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`;
  
  const grabWeather = () => {
    axios.get(url)
    .then((response) => {
      console.log(response);
      console.clear();
      setData(response.data)
      console.log(response.data);
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <>
      <main>
        <button onClick={() => grabWeather()}>Grab Info</button>
        {
          data && data.weather.map((d: any, index: number) => {
            return(
              <div key={index}>
                  <div>{d.main}</div>
                  <div>{d.description}</div>
              </div>
            )
          })
        }
      </main>
    </>
  )
}