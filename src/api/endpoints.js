export const BASE_URL = 'https://api.openweathermap.org/data/2.5';
export const API_KEY = 'DEMO_KEY'; // Use environment variables in production

export const endpoints = {
    currentWeather: (lat, lon) => `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
    forecast: (lat, lon) => `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
    search: (query) => `${BASE_URL}/weather?q=${query}&units=metric&appid=${API_KEY}`,
};
