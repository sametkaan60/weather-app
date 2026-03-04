import { endpoints } from './endpoints';

export const fetchWeatherByCoords = async (lat, lon) => {
    try {
        const [currentRes, forecastRes] = await Promise.all([
            fetch(endpoints.currentWeather(lat, lon)),
            fetch(endpoints.forecast(lat, lon)),
        ]);

        if (!currentRes.ok || !forecastRes.ok) throw new Error('Failed to fetch weather data');

        const currentData = await currentRes.json();
        const forecastData = await forecastRes.json();

        return { current: currentData, forecast: forecastData };
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
};

export const searchWeatherByCity = async (city) => {
    try {
        const response = await fetch(endpoints.search(city));
        if (!response.ok) throw new Error('City not found');
        return await response.json();
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
};
