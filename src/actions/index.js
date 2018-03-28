import axios from "axios";

const API_KEY = "9edb6314f28d144489e76ae542a8b123";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// Create a variable "FETCH_WEATHER" instead of using type: string
// Keeping action types consistent between actionCreators and reducers
export const FETCH_WEATHER = "FETCH_WEATHER";

// actionType FETCH_WEATHER
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);


  return {
    type: FETCH_WEATHER,
    payload: request
  };
}