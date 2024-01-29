import React from "react";
import WeatherApp from "../components/WeatherApp/WeatherApp";
import { Provider } from "react-redux";
import store from "../Redux/store";

const Home = () => {
  return (
    <Provider store={store}>
      <div>
        <WeatherApp />
      </div>
    </Provider>
  );
};

export default Home;
