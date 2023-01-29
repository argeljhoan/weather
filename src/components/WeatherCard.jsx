import React from 'react'

const WeatherCard = ({ weather, temps, isCelsius, changeUnitTemp  }) => {
  
  return (
    <section className='Section'>
      <div className='title'>
        <h1>Weather App</h1>
        <h2>{weather?.name}, {weather?.sys.country} </h2>
      </div>
      <div className='imagen'>
       <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="icon weather" />  
  
         
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