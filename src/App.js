import React,{useState} from 'react'
import './App.css'


function App() {

  const apiKey=''
  const [weatherData, setWeatherData]= useState([{}])
  const [city,setCity]= useState("")

  const getWeather=(event) => {
    if(event.key=="Enter"){
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&units=imperial&APPID=${apiKey}`).then(
        response => response.json()
      ).then(
        data => {
          setWeatherData(data)
          setCity("")
        }
      )
    }
  }


  return (
    <div className="container">
      <input 
      className='input' 
      placeholder='Enter city you want to Search ..'
      onChange={e => setCity(e.target.value)}
      value={city}
      onKeyPress={getWeather}
      
      />
      { typeof weatherData.main === 'undefined'? (
        <div>
          <p> Poojan Weather page Welcome You</p>
        </div>
      ) : (
        <div className='weather-data'>
          <p className='city'>{weatherData.name }</p>
          <p className='temp'>{Math.round(weatherData.main.temp)}F</p>
          <p className='state'>{weatherData.weather[0].main}</p>
        </div>
      )}

    </div>
  )
}

export default App