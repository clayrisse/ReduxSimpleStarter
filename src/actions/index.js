import axios from 'axios'

const API_KEY= '443680d2b5458a3d8581f60b5f73e725'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url)
  //here redux-promise stops the action untill it gets the response cause 
  //is an asyncronous call and inject it to payload
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}