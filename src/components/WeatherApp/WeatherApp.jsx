import React from "react";
import "./WeatherApp.css";
import SearchIcon from "../../Icon/Search/search.png";
import CloudRain from "../../Icon/Weather-Cloud/cloud-with-rain.png";
import humidity from "../../Icon/Weather-Staus/humidity.png";
import pressure from "../../Icon/Weather-Staus/pressure.png";
import wind from "../../Icon/Weather-Staus/wind.png";
import ForecastWeather from "../Forecast-Weather/ForecastWeather";
const WeatherApp = () => {
  return (
    <div>
      <div className="container">
        <div className="header">
          <h1 className="haed-title">ReactWeatherApp</h1>
          <p className="mood">night/light mood</p>
        </div>
        <div>
          <div className="search-container">
            <img src={SearchIcon} alt="Search icon" className="search-icon" />
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
          </div>
        </div>

        <div className="Information-div">
          <div className="Info-div">
            <h2 className="title-weather">Current Weather</h2>
            <p className="city">Paris</p>
            <div className="dis-flex">
              <div>
                <img src={CloudRain} alt="RainCloud" />
              </div>
              <div>
                <p className="temperature">38</p>
              </div>
            </div>
            <p className="Weather">Rainy</p>
          </div>
          <div className="status-div">
            <p className="status">
              Feels like <span>38</span>
            </p>
            <div>
              <p>
                <span>
                  <img src={humidity} alt="humidity" className="status-img" />
                </span>{" "}
                <span className="status-text">Humidity</span>{" "}
                <span className="staus-span">73%</span>
              </p>
            </div>
            <div>
              <p>
                <span>
                  <img src={wind} alt="wind" className="status-img" />
                </span>{" "}
                <span className="status-text">Wind</span>{" "}
                <span className="staus-span">20km/h</span>
              </p>
            </div>
            <div>
              <p>
                <span>
                  <img src={pressure} alt="pressure" className="status-img" />
                </span>{" "}
                <span className="status-text">Pressure</span>{" "}
                <span className="staus-span">1014hPa</span>
              </p>
            </div>
          </div>
        </div>
        <ForecastWeather />
      </div>
    </div>
  );
};

export default WeatherApp;
