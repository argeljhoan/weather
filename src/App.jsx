
import './App.css'
import SearchCountry from './components/SearchCountry'

const API_KEY ="8861dee6776d00f477ac5b3f5c9f106f"
function App() {

  
  return (
    <div className="App">
   {/* <WeatherCard  weather={weather} temps = {temps} isCelsius={isCelsius} changeUnitTemp={changeUnitTemp} />  */}
    <SearchCountry/> 
    </div>
  )
}

export default App
