import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import LanguageSwitcher from '../components/LanguageSwitcher/LanguageSwitcher'
import WeatherCondition from '../components/WeatherCondition/WeatherCondition'
import './CurrentWeather.scss'
import { useTranslation } from 'react-i18next'
import { useWeather } from 'src/context/WeatherContext'
import { fetchCurrentWeather } from 'src/utils/weatherApi'
import Loading from 'src/components/Loading/Loading'

const CurrentWeather = () => {
  const { t } = useTranslation()

  const [loading, setLoading] = useState(false)
  const { weather, setWeather } = useWeather()
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetchCurrentWeather('Nairobi')
      .then(setWeather)
      .catch((err) => {
        setError(err.message || t('errorFetching'))
        console.error('Error loading weather:', err)
      })
      .finally(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (error)
    return (
      <p className="text-red-500">
        {t('error')}: {error}
      </p>
    )

  return (
    <div className="current-weather-container">
      <div className="current-weather-hero">
        <div className="current-weather-subcontainer">
          <LanguageSwitcher />
          <div className="current-weather-card">
            {!weather || Object.keys(weather).length === 0 || loading ? (
              <Loading />
            ) : (
              <>
                <div className="current-weather-card-subcontainer">
                  <div className="current-weather-card-temp">
                    <img
                      // src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                      src={`https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${weather.weather[0].icon}.png`}
                      alt={weather.weather[0].description}
                      loading="lazy"
                      className="current-weather-image"
                    />
                    <h1 className="current-temp">
                      <span className="current-temp-value">{Math.round(weather.main.temp)}</span>
                      <sup>°C</sup>
                    </h1>
                  </div>
                  <div className="current-weather-card-description">
                    <h6 className="current-weather-description">
                      {_.capitalize(t(`weatherConditions.${weather.weather[0].id}`))}
                    </h6>
                    <h1 className="current-weather-location">
                      {weather.name}, {weather?.sys?.country}
                    </h1>
                  </div>
                </div>
                <span className="current-weather-datetime">
                  {new Date(parseInt(weather.dt) * 1000).toLocaleTimeString()}
                </span>
                <section className="current-weather-conditions">
                  <WeatherCondition
                    title={t('wind')}
                    condition={
                      <>
                        {`${Number(weather.wind.speed * 3.6).toFixed(2)}`} <small>km/h</small>{' '}
                        <span role="presentation" aria-hidden="true">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 10 14"
                            style={{ transform: `rotate(${weather.wind.deg}deg)` }}
                          >
                            <path d="M5 0L9.66895 14L5 9.33105L0.331055 14L5 0Z" fill="black"></path>
                          </svg>
                        </span>
                      </>
                    }
                  />
                  <WeatherCondition
                    title={t('pressure')}
                    condition={
                      <>
                        {weather.main.pressure} <small className="font-normal ml-1">hPa</small>
                      </>
                    }
                  />
                  <WeatherCondition
                    title={t('humidity')}
                    condition={
                      <>
                        {weather.main.humidity} <small className="font-normal ml-1">%</small>
                      </>
                    }
                  />
                  <WeatherCondition
                    title={t('visibility')}
                    condition={
                      <>
                        {Math.round(weather.visibility / 1000)} <small className="font-normal ml-1">km</small>
                      </>
                    }
                  />
                  <WeatherCondition
                    title={t('clouds')}
                    condition={
                      <>
                        {weather.clouds.all} <small className="font-normal ml-1">%</small>
                      </>
                    }
                  />
                  <WeatherCondition
                    title={t('rain')}
                    condition={
                      <>
                        {weather?.rain ? weather.rain['1h'] : 0} <small className="font-normal ml-1">mm</small>
                      </>
                    }
                  />
                  <WeatherCondition
                    title={t('sunrise')}
                    condition={<>{new Date(parseInt(weather.sys.sunrise) * 1000).toLocaleTimeString()}</>}
                  />
                  <WeatherCondition
                    title={t('sunset')}
                    condition={<>{new Date(parseInt(weather.sys.sunset) * 1000).toLocaleTimeString()}</>}
                  />
                </section>
              </>
            )}
          </div>
        </div>
      </div>
      {weather && Object.keys(weather).length > 0 ? (
        <img
          alt={weather.weather[0].description}
          src={`https://source.unsplash.com/random/900x1273/?${_.kebabCase(weather?.weather[0]?.description)}`}
          className="current-weather-splash"
        />
      ) : (
        <img
          alt={'Nairobi Weather'}
          src={`https://source.unsplash.com/random/900x1273/?Nairobi+Weather"}`}
          className="current-weather-splash"
        />
      )}
    </div>
  )
}

export default CurrentWeather
