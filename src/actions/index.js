import axios from 'axios';

const API_KEY = 'f8408f3540058d1f74a53d53ed945cd1';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const query = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(query);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}