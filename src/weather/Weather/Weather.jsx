import React, { useContext } from "react";
import { WeatherContext } from "../../shared/context/weather-context";

import Search from "../Search/Search";
import WeatherList from "../WeatherList/WeatherList";
import ErrorModal from "../../shared/components/ErrorModal/ErrorModal";
import LoadingSpinner from "../../shared/components/LoadingSpinner/LoadingSpinner";

import "./Weather.css";

const Weather = () => {
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
      {weatherData.isLoading && <LoadingSpinner/>}
      {!weatherData.isLoading && <div className="weather" data-testid="weater-test">
        <div className="weather_average">
          <p className="weather_date">{weatherData.dateWeather}</p>
          {weatherData.averageTemp && 
            <p className="average">
              {weatherData.averageTemp}
              <span className="item_unit">°C</span>
            </p>
          }
        </div>
        
        {weatherData.averageTemp && <WeatherList />}
      </div>}
    </div>
  );
};

export default Weather;
