import "./i18n/config";
import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
import CurrentWeather from './views/CurrentWeather'
import { WeatherProvider } from './context/WeatherContext'

const App = () => {
  return (
    <WeatherProvider>
      <CurrentWeather />
    </WeatherProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
