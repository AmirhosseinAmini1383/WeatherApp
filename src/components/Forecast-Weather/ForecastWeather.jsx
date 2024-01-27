import React from "react";
import "./ForecastWeather.css";
import thunderstorm from "../../Icon/Weather-Cloud/cloud-with-lightning-and-rain.png";
import clouds from "../../Icon/Weather-Cloud/cloud.png";
import snow from "../../Icon/Weather-Cloud/cloud-with-snow.png";
import rain from "../../Icon/Weather-Cloud/cloud-with-rain.png";
import partlycloudy from "../../Icon/Weather-Cloud/sun-behind-large-cloud.png";
import sun from "../../Icon/Weather-Cloud/sun.png";

const ForecastWeather = () => {
  return (
    <div>
      <div className="ForecastWeather-div">
        <div className="Current-div">
          <h2 className="title-weather">Current Weather</h2>
        </div>
        <div className="dis-grid-div">
          <div>
            <div>
              <p className="day">Sat</p>
            </div>
            <div>
              <img className="img-status" src={clouds} alt="clouds" />
            </div>
            <div>
              <p className="status">Cloudy</p>
            </div>
            <div>
              <p className="status">24/21</p>
            </div>
          </div>
          <div>
            <div>
              <p className="day">Sun</p>
            </div>
            <div>
              <img
                className="img-status"
                src={thunderstorm}
                alt="thunderstorm"
              />
            </div>
            <div>
              <p className="status">Thunderstorm</p>
            </div>
            <div>
              <p className="status">29/20</p>
            </div>
          </div>
          <div>
            <div>
              <p className="day">Mon</p>
            </div>
            <div>
              <img className="img-status" src={snow} alt="snow" />
            </div>
            <div>
              <p className="status">Snowy</p>
            </div>
            <div>
              <p className="status">30/21</p>
            </div>
          </div>
          <div>
            <div>
              <p className="day">Tue</p>
            </div>
            <div>
              <img className="img-status" src={rain} alt="rain" />
            </div>
            <div>
              <p className="status">Rainy</p>
            </div>
            <div>
              <p className="status">26/19</p>
            </div>
          </div>
          <div>
            <div>
              <p className="day">Wed</p>
            </div>
            <div>
              <img className="img-status" src={rain} alt="rain" />
            </div>
            <div>
              <p className="status">Rainy</p>
            </div>
            <div>
              <p className="status">26/19</p>
            </div>
          </div>
          <div>
            <div>
              <p className="day">Thu</p>
            </div>
            <div>
              <img
                className="img-status"
                src={partlycloudy}
                alt="partlycloudy"
              />
            </div>
            <div>
              <p className="status">PartlyCloudy</p>
            </div>
            <div>
              <p className="status">28/19</p>
            </div>
          </div>
          <div>
            <div>
              <p className="day">Fri</p>
            </div>
            <div>
              <img className="img-status" src={sun} alt="sun" />
            </div>
            <div>
              <p className="status">Sunny</p>
            </div>
            <div>
              <p className="status">28/20</p>
            </div>
          </div>
        </div>
      </div>
      <p className="develop">
        Developed By <span>AmirHo3einAmini</span>
      </p>
    </div>
  );
};

export default ForecastWeather;
