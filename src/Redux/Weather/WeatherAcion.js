import axios from "axios";
import {
  RECEIVE_WEATHER_ERROR,
  RECEIVE_WEATHER_RESPONSE,
  SEND_WEATHER_REQUEST,
} from "./WeatherTypes";

export const SendWeatherRequest = () => {
  return {
    type: SEND_WEATHER_REQUEST,
  };
};
export const ReceiveWeatherResponse = (data) => {
  return {
    type: RECEIVE_WEATHER_RESPONSE,
    payload: data,
  };
};
export const ReceiveWeatherError = (data) => {
  return {
    type: RECEIVE_WEATHER_ERROR,
    payload: data,
  };
};

const getWeatherInfo = (query) => {
  return (dispatch) => {
    dispatch(SendWeatherRequest());
    axios
      .get(
        `
        https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=d181d636d3255d31b912ce123b2defa3
        `
      )
      .then((res) => {
        dispatch(ReceiveWeatherResponse(res.data));
      })
      .catch((err) => {
        dispatch(ReceiveWeatherError(err.message));
      });
  };
};
export default getWeatherInfo;
