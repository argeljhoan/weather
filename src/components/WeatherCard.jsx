import React, { useEffect, useState } from 'react'


import Sun from "../assets/iconos-weather/Day Sun.png"
import CloudsDay from "../assets/iconos-weather/Clouds.png"
import RainDay from "../assets/iconos-weather/Day Rain.png"
import SnowDay from "../assets/iconos-weather/Day Snow.png"

const WeatherCard = ({ weather, temps, isCelsius, changeUnitTemp  }) => {

  const icon = `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png` 
  const [stateIcon , setStateIcon] = useState(icon)
  useEffect(()=>{
//few clouds
    //const mainWeather = weather?.weather[0].main 
    const mainWeather = weather?.weather[0].main
    const nubesdescrip = weather?.weather[0].description
    if(mainWeather == 'Clouds') {
  
      if(nubesdescrip == 'few clouds'){
        setStateIcon(Sun)
        console.log(nubesdescrip);
      }else{
        setStateIcon(CloudsDay)
        console.log(nubesdescrip);
      }
   
  }else if(mainWeather == 'Rain'){

    setStateIcon(RainDay)
  }
  else if(mainWeather == 'Snow'){

    setStateIcon(SnowDay)
  }

  },[stateIcon] )


  return (
    <section className='Section'>
      <div className='title'>
        <h1>Weather App</h1>
        <h2>{weather?.name}, {weather?.sys.country} </h2>
      </div>
      <div className='imagen'>
       {/* <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="icon weather" />  */}
     <img className='Tamaño' src={stateIcon} alt="" />
         
      </div>
      <div className='Info'>
        <h3>{isCelsius ? temps?.celsius + " ºC" : temps?.fahrenheit + " ºF"} </h3>
        <ul className='list__Info'>
          <li><span>{weather?.weather[0].main}, {weather?.weather[0].description}</span> </li>
          <li><span>Wind Speed: </span>{weather?.wind.speed} m/sec</li>
          <li><span>Clouds: </span>{weather?.clouds.all}%</li>
          <li><span>Pressure: </span>{weather?.main.pressure}hp </li>
        </ul>
        <button className='button' onClick={changeUnitTemp}> &deg;C / &deg;F</button>
      </div>
    </section>
  )
}
//https://www.figma.com/community/file/1023658389987124693
//https://loading.io/css/
export default WeatherCard