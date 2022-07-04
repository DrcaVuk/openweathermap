import React, { useContext } from "react";
import { WeatherContext } from "../../shared/context/weather-context";
import WeatherItem from "../WeatherItem/WeatherItem";
import "./WeatherList.css";

const WeatherList = () => {
  const weatherData = useContext(WeatherContext);
  return (
      
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
  );
};

export default WeatherList;
