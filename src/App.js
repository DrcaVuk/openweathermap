import React, { useContext, useEffect } from "react";
import { WeatherContext } from "./shared/context/weather-context";
import { useWeatherHook } from "./shared/hooks/weather-hook";
import axios from "axios";
import { api_url } from "./variable";

import WeatherOne from "./weather/WeatherOne/WeatherOne";

import "./App.css";

function App() {
  axios.defaults.baseURL = api_url;
  axios.defaults.headers = { "Content-Type": "application/json" };

  return (
    <WeatherContext.Provider value={useWeatherHook()}>
      <WeatherOne />
    </WeatherContext.Provider>
  );
}
export default App;
