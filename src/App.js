import React, { useContext, useState } from "react";
import { WeatherContext } from "./shared/context/weather-context";
import { useWeatherHook } from "./shared/hooks/weather-hook";
import axios from "axios";

import { api_url } from "./variable";

import Search from "./components/Search/Search";
import Weather from "./weather/Weather/Weather";
import ErrorModal from "./shared/components/ErrorModal/ErrorModal";

import "./App.css";

function App() {
  const [style, setStyle] = useState(
    "linear-gradient(150deg, rgba(209, 228, 242, 1) 50%, rgba(224, 219, 155, 1) 100%)"
  );
  const weatherData = useContext(WeatherContext);
  axios.defaults.baseURL = api_url;
  axios.defaults.headers = { "Content-Type": "application/json" };

  // const fetchData = async () => {

  //   averageColor /= filterTime.length;
  //   setAverageTemp(averageColor.toFixed(0));

  //   let date2 = datetime.getFullDate(
  //     res.data.list[res.data.list.length - 1].dt_txt
  //   );
  //   setWeatherDate(stringDate);
  //   let p = ((80 - averageColor) * 100) / 80 / 100;
  //   let r = (16 + 255) / (2 * p);
  //   let g = (57 + 148) / (2 * p);
  //   let b = (136 + 86) / (2 * p);
  //   setStyle(
  //     `linear-gradient(150deg, rgba(209, 228, 242, 1) 50%, rgba(${r}, ${g}, ${b}, 1) 100%)`
  //   );
  //   setWeatherData(filterTime);
  // };

  return (
    <WeatherContext.Provider value={useWeatherHook()}>
      <div className="App" style={{ background: `linear-gradient(150deg, rgba(209, 228, 242, 1) 50%, rgba(${weatherData.colorTemp.r}, ${weatherData.colorTemp.g}, ${weatherData.colorTemp.b}, 1) 100%)` }}>
        {weatherData.error && (
          <ErrorModal
            onClick={weatherData.clearError}
            error={weatherData.error}
          />
        )}
        <Search />
        <Weather />
      </div>
    </WeatherContext.Provider>
  );
}
export default App;
