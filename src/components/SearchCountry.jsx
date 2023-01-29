
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import WeatherCard from './WeatherCard'


const SearchCountry = () => {

    const [city , setCity] = useState('cucuta')
    const [weather, setWeather] = useState()
    const [temps, setTemps] = useState()
    const [isCelsius, setIsCelsius] = useState(true)
    
const SearchCity =(ev) => {

ev.preventDefault()

setCity(ev.target.search.value);

console.log(city);
}

const changeUnitTemp = () => setIsCelsius(!isCelsius)

const apiCity = ()=>{

const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${city},&appid=8861dee6776d00f477ac5b3f5c9f106f`
axios.get(URL)
.then((res) => 
    {
     setWeather(res.data)
      const celsius = (res.data.main.temp -273.15).toFixed(2);
      const fahrenheit= (celsius *(9/5) +32).toFixed(2);
      const newTemps = {celsius,fahrenheit}
      setTemps (newTemps)
    })
.catch(err => console.log(err))

}

useEffect (() =>{
    apiCity()

},[city] )






///https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}


  return (
    <div className='Contenedor-Principal'>

 <section className='SectionForm'>
        <form className='form' onSubmit={SearchCity}>
        <input className='input' id='search' type="text" placeholder='Ciudad...' />
        <button className='btn-form' type='submit'>Buscar</button>
        </form>
 </section>
      
    <WeatherCard  weather={weather} temps = {temps} isCelsius={isCelsius} changeUnitTemp={changeUnitTemp} /> 

    </div>
  )
}

export default SearchCountry