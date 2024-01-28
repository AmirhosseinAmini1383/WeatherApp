import React from "react";
import "./WeatherApp.css";
import SearchIcon from "../../Icon/Search/search.png";
import rain from "../../Icon/Weather-Cloud/cloud-with-rain.png";
// import thunderstorm from "../../Icon/Weather-Cloud/cloud-with-lightning-and-rain.png";
// import snow from "../../Icon/Weather-Cloud/cloud-with-snow.png";
// import cloud from "../../Icon/Weather-Cloud/cloud.png";
// import partlycloudy from "../../Icon/Weather-Cloud/sun-behind-large-cloud.png";
// import sun from "../../Icon/Weather-Cloud/sun.png";
// import windy from "../../Icon/Weather-Cloud/windy-weather.png";
import humidity from "../../Icon/Weather-Staus/humidity.png";
import pressure from "../../Icon/Weather-Staus/pressure.png";
import wind from "../../Icon/Weather-Staus/wind.png";
import ForecastWeather from "../Forecast-Weather/ForecastWeather";
import PersianDate from "../PersionDate/PersionDate";
const WeatherApp = () => {
  // const [cloudMood, setCloudMood] = useState("");
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
                <img src={rain} alt="RainCloud" />
              </div>
              <div>
                <p className="temperature">38°</p>
              </div>
            </div>
            <p className="Weather">Rainy</p>
          </div>
          <div className="status-div">
            <p className="status">
              Feels like <span>38°</span>
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
