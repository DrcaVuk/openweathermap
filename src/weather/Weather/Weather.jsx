import React, { useContext } from "react";
import { WeatherContext } from "../../shared/context/weather-context";
import WeatherItem from "../WeatherItem/WeatherItem";
import "./Weather.css";

const Weather = () => {
  const weatherData = useContext(WeatherContext);
  return (
    <div className="weather">
      <div className="weather_average">
        <p className="weather_date">{weatherData.dateWeather}</p>
        <p className="average">
          {weatherData.averageTemp}
          <span>°C</span>
        </p>
      </div>
      <div className="weather_list">
        {weatherData.weatherList.map((data, index) => (
          <WeatherItem
            key={index}
            day={data.day}
            temp={data.temp}
            icon={data.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Weather;
