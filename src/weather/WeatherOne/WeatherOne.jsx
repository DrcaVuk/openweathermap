import React, { useContext } from "react";
import { WeatherContext } from "../../shared/context/weather-context";

import Search from "../../components/Search/Search";
import Weather from "../Weather/Weather";
import ErrorModal from "../../shared/components/ErrorModal/ErrorModal";

import "./WeatherOne.css";

const WeatherOne = () => {
  const weatherData = useContext(WeatherContext);
  return (
    <div
      className="weather-flux"
     style={{
        background: `linear-gradient(150deg, rgba(209, 228, 242, 1) 50%, rgba(${weatherData.colorTemp[0]}, ${weatherData.colorTemp[1]}, ${weatherData.colorTemp[2]}, 1) 100%)`,
      }}
    >
      {weatherData.error && (
        <ErrorModal
          onClick={weatherData.clearError}
          error={weatherData.error}
        />
      )}
      <Search />
      <Weather />
    </div>
  );
};

export default WeatherOne;
