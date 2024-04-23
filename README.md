# Hewani

A simple React application built on Create React App that shows the current weather in Nairobi using the OpenWeather API

![](https://pasteimg.com/images/2024/04/23/Hewani.png)

## Table of contents

- [Hewani](#Hewani)
- [Getting started](#getting-started)
- [First steps](#first-steps)
- [Usage](#usage)
- [Documentation](#documentation)
- [Development](#development)
- [Style guide](#style-guide)
- [Running tests](#running-tests)
- [Release](#release)
- [Deployment](#deployment)
- [Rollback](#rollback)

## Getting started

### First steps

Clone this repository and go into the directory into which you cloned.

After that run:

```bash
yarn  install
```

## Usage

This application is standalone but requires an OpenWeather API key which can be generated [here](https://openweathermap.org/appid)

- Add the API key in the `.env` file as **REACT_APP_OPENWEATHER_API_KEY**.

- Add `REACT_APP_OPENWEATHER_API_BASE_URL="https://api.openweathermap.org/data/2.5/"` to the `.env` file as well. Update this based on the Openweather API documentation.

After that run:

```bash
yarn  start
```

## Documentation

- [Openweather API Documentation](https://openweathermap.org/api)
- [Openweather Current Weather API](https://openweathermap.org/current) - provides the current weather data for Nairobi
- [Create React App](https://create-react-app.dev/docs/getting-started) - used to setup the application
- [Unsplash](https://unsplash.com/developers) - the weather image is fetched from Unsplash by searching for the weather description

## Development

This application is built from Create React App. The [documentation](https://create-react-app.dev/docs/getting-started) can be useful when developing.

Set up husky in your local environment by following these [instructions](https://medium.com/@mariokandut/how-to-add-husky-to-react-233f0ca48752)

Before submitting a patch, please make sure:

- the code honors the [style guide](#style-guide).
- the [test suite](#running-tests) passes.

### Translations

The application supports English and Swahili. The language files are contained inside the [i18n](https://github.com/bankai254/hewani/tree/main/src/i18n) folder.

To facilitate faster translation of the weather condition, the `keys` of the items under the [`weatherConditions`](https://github.com/bankai254/hewani/blob/47410d61b55f70b9244a285f66904daa702161cf/src/i18n/en/translation.json#L19) match the [weather conditions codes](https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2) listed by Openweather

### Weather Icons

There are 2 sets of weather icons that are available to use.

- Official Openweather icons - these can be found [here](https://openweathermap.org/weather-conditions#Icon-list) - [in code](https://github.com/bankai254/hewani/blob/47410d61b55f70b9244a285f66904daa702161cf/src/views/CurrentWeather.js#L50)
- Openweather widget icons - these are derived from [here](https://openweathermap.org/widgets-constructor) - [in code](https://github.com/bankai254/hewani/blob/47410d61b55f70b9244a285f66904daa702161cf/src/views/CurrentWeather.js#L51)

### Style guide

Before submitting a patch, please make sure that the code is formatted executing this command:

```bash
yarn  lint:fix
```

If you just want to see which files and lines need fixing, run this

```bash
yarn  lint
```

### Running tests

The test suite can be run executing this command:

```bash
yarn  test
```

## Release

### Deployment

None available at this time.

### Rollback

None available at this time.
