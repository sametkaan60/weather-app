import React, { createContext, useState } from 'react';
import { fetchWeatherByCoords, searchWeatherByCity } from '../api/weatherApi';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const loadWeather = async (lat, lon) => {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchWeatherByCoords(lat, lon);
            setWeatherData(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const searchCity = async (city) => {
        try {
            setLoading(true);
            const data = await searchWeatherByCity(city);
            // To get complete current + forecast data:
            await loadWeather(data.coord.lat, data.coord.lon);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }

    return (
        <WeatherContext.Provider value={{ weatherData, loading, error, loadWeather, searchCity }}>
            {children}
        </WeatherContext.Provider>
    );
};
