# Hewani

A simple React application built on Create React App that shows the current weather in Nairobi using the OpenWeather API

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
- [Openweather Current Weather API](https://openweathermap.org/current)
- [Create React App](https://create-react-app.dev/docs/getting-started)

## Development

This application is built from Create React App. The [documentation](https://create-react-app.dev/docs/getting-started) can be useful when developing.

Set up husky in your local environment by following these [instructions](https://medium.com/@mariokandut/how-to-add-husky-to-react-233f0ca48752)

Before submitting a patch, please make sure:

- the code honors the [style guide](#style-guide).

- the [test suite](#running-tests) passes.

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
