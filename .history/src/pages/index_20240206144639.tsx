import Image from "next/image";
import axios from 'axios'
import { useState } from 'react'

export default function Home() {

  const [datra, setData] = useState();

  var APIkey = '5023282192c8832822ba0a7a68a2a33d'
  var lat = ''
  var lon = ''
  var part = ''


  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${APIkey}`
  
  const GrabNews = () => {
    axios.get(url)
    .then((response) => {
      // console.log(response);
      console.clear();
      setData(response.data)
      console.log(response.data);
    }).catch(err => {
      console.log(err);
    })
  }
  
  
  return (
    <main className={'flex flex-col items center'}>
      <h1>Weather App</h1>
    </main>
  );
}
