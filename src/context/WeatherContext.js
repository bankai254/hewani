import React, { createContext, useState, useContext } from 'react'
import { languageOptions } from 'src/utils/common'

const WeatherContext = createContext()

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState({})
  const [language, setLanguage] = useState(languageOptions[0].id)

  return (
    <WeatherContext.Provider
      value={{
        weather,
        setWeather,
        language,
        setLanguage,
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

export const useWeather = () => useContext(WeatherContext)
