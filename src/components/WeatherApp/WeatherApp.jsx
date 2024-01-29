import React, { useState } from "react";
import "./WeatherApp.css";
import SearchIcon from "../../Icon/Search/search.png";
import rain from "../../Icon/Weather-Cloud/cloud-with-rain.png";
import thunderstorm from "../../Icon/Weather-Cloud/cloud-with-lightning-and-rain.png";
import snow from "../../Icon/Weather-Cloud/cloud-with-snow.png";
import cloud from "../../Icon/Weather-Cloud/cloud.png";
import partlycloudy from "../../Icon/Weather-Cloud/sun-behind-large-cloud.png";
import sun from "../../Icon/Weather-Cloud/sun.png";
import windy from "../../Icon/Weather-Cloud/windy-weather.png";
import mist from "../../Icon/Weather-Cloud/mist.png";
import humidity from "../../Icon/Weather-Staus/humidity.png";
import haze from "../../Icon/Weather-Cloud/haze.png";
import pressure from "../../Icon/Weather-Staus/pressure.png";
import wind from "../../Icon/Weather-Staus/wind.png";
import ForecastWeather from "../Forecast-Weather/ForecastWeather";
import PersianDate from "../PersionDate/PersionDate";
import { useDispatch, useSelector } from "react-redux";
import getWeatherInfo from "../../Redux/Weather/WeatherAcion";

const WeatherApp = () => {
  // const [cloudMood, setCloudMood] = useState("");
  const { loading, data, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const handleGetWeather = (e) => {
    e.preventDefault();
    dispatch(getWeatherInfo(query));
    console.log(data);
  };
  return (
    <div>
      <div className="container">
        <div className="header">
          <h1 className="haed-title">ReactWeatherApp</h1>
          <PersianDate />
        </div>
        <div>
          <div className="search-container">
            <img src={SearchIcon} alt="Search icon" className="search-icon" />
            <form onSubmit={handleGetWeather}>
              <input
                type="text"
                placeholder={data.name || "Search..."}
                className="search-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </form>
          </div>
        </div>
        {loading ? (
          <div className="search-alert">
            <p>Loading...</p>
          </div>
        ) : data.main ? (
          <div className="Information-div">
            <div className="Info-div">
              <h2 className="title-weather">Current Weather</h2>
              <p className="city">{data.name}</p>
              <div className="dis-flex">
                <div>
                  <img
                    className="weather-img"
                    src={
                      data.weather[0].main == "Clouds"
                        ? `${cloud}`
                        : data.weather[0].main == "Clear"
                        ? `${partlycloudy}`
                        : data.weather[0].main == "Snow"
                        ? `${snow}`
                        : data.weather[0].main == "Wind"
                        ? `${windy}`
                        : data.weather[0].main == "Sun"
                        ? `${sun}`
                        : data.weather[0].main == "Rain"
                        ? `${rain}`
                        : data.weather[0].main == "Thunder"
                        ? `${thunderstorm}`
                        : data.weather[0].main == "Mist"
                        ? `${mist}`
                        : data.weather[0].main == "Haze"
                        ? `${haze}`
                        : ``
                    }
                    alt="RainCloud"
                  />
                </div>
                <div>
                  <p className="temperature">
                    <span>{Math.round(data.main.temp)}</span>°
                  </p>
                </div>
              </div>
              <p className="Weather">{data.weather[0].main}</p>
            </div>
            <div className="status-div">
              <p className="status">
                Feels like{" "}
                <span className="staus-span">{data.main.feels_like}°</span>
              </p>
              <div>
                <p>
                  <span>
                    <img src={humidity} alt="humidity" className="status-img" />
                  </span>{" "}
                  <span className="status-text">Humidity</span>{" "}
                  <span className="staus-span">{data.main.humidity}%</span>
                </p>
              </div>
              <div>
                <p>
                  <span>
                    <img src={wind} alt="wind" className="status-img" />
                  </span>{" "}
                  <span className="status-text">Wind</span>{" "}
                  <span className="staus-span">{data.wind.speed}km/h</span>
                </p>
              </div>
              <div>
                <p>
                  <span>
                    <img src={pressure} alt="pressure" className="status-img" />
                  </span>{" "}
                  <span className="status-text">Pressure</span>{" "}
                  <span className="staus-span">{data.main.pressure}hPa</span>
                </p>
              </div>
            </div>
          </div>
        ) : error ? (
          <div className="search-alert">
            <p>Enter the name of the city or country correctly!</p>
          </div>
        ) : (
          <div className="search-alert">
            <p>Search for the desired location.</p>
          </div>
        )}

        <ForecastWeather />
      </div>
    </div>
  );
};

export default WeatherApp;
