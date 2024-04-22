import React from 'react';
import { render, act, screen } from '@testing-library/react';
import { WeatherProvider, useWeather } from './WeatherContext';
import { languageOptions } from 'src/utils/common'; // Ensure the import path matches your project structure

const sampleWeather = {
    "coord": {
        "lon": 36.8167,
        "lat": -1.2833
    },
    "weather": [
        {
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 18.93,
        "feels_like": 19.18,
        "temp_min": 18.87,
        "temp_max": 18.93,
        "pressure": 1023,
        "humidity": 88
    },
    "visibility": 10000,
    "wind": {
        "speed": 0,
        "deg": 0
    },
    "rain": {
        "1h": 0.25
    },
    "clouds": {
        "all": 75
    },
    "dt": 1713825270,
    "sys": {
        "type": 1,
        "id": 2558,
        "country": "KE",
        "sunrise": 1713842915,
        "sunset": 1713886385
    },
    "timezone": 10800,
    "id": 184745,
    "name": "Nairobi",
    "cod": 200
}

// Test component that uses the useWeather hook
const TestComponent = () => {
    const { weather, setWeather, language, setLanguage } = useWeather();
    return (
        <div>
            <div data-testid="weather">{JSON.stringify(weather)}</div>
            <div data-testid="language">{language}</div>
            <button onClick={() => setWeather(sampleWeather)}>Set Weather</button>
            <button onClick={() => setLanguage('sw')}>Set Language</button>
        </div>
    );
};

describe('WeatherContext', () => {
    it('should provide initial weather and language values', () => {
        render(
            <WeatherProvider>
                <TestComponent />
            </WeatherProvider>
        );

        expect(screen.getByTestId('weather').textContent).toBe("{}")
        expect(screen.getByTestId('language').textContent).toBe(languageOptions[0].id);
    });

    it('should allow updating the weather and language', () => {
        render(
            <WeatherProvider>
                <TestComponent />
            </WeatherProvider>
        );

        act(() => {
            screen.getByText('Set Weather').click();
            screen.getByText('Set Language').click();
        });

        expect(screen.getByTestId('weather').textContent).toBe(JSON.stringify(sampleWeather));
        expect(screen.getByTestId('language').textContent).toBe('sw');
    });
});
