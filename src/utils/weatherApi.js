import axios from 'axios'

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY
const BASE_URL = process.env.REACT_APP_OPENWEATHER_API_BASE_URL

export const fetchCurrentWeather = async (/** @type {string} */ city) => {
  const { data } = await axios.get(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`)
  return data
}

export const fetchWeatherForecast = async (/** @type {string} */ city) => {
  const { data } = await axios.get(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`)
  return data
}

export const fetchLocationWeather = async (/** @type {string} */ lat, /** @type {string} */ lon) => {
  const { data } = await axios.get(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
  return data
}

export const fetchLocationForecast = async (/** @type {string} */ lat, /** @type {string} */ lon) => {
  const { data } = await axios.get(`${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
  return data
}
