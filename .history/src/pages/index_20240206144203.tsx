import Image from "next/image";
import axios from 'axios'

export default function Home() {

  var APIkey = '5023282192c8832822ba0a7a68a2a33d'
  var lat = ''
  var lon = ''


  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${APIkey}`
  return (
    <main className={'flex flex-col items center'}>
      <h1>Weather App</h1>
    </main>
  );
}
