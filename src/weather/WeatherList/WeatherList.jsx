import React, { useContext } from "react";
import { WeatherContext } from "../../shared/context/weather-context";
import WeatherItem from "../WeatherItem/WeatherItem";
import "./WeatherList.css";

const WeatherList = () => {
  const weatherData = useContext(WeatherContext);
  return (
    <div className="weather_list" data-testid="weather_list-test">
      {weatherData.weatherList.map((data, index) => (
        <WeatherItem
          key={index}
          day={data.day}
          temp={data.temp}
          icon={data.icon}
          data-testid="weater_item-test"
        />
      ))}
    </div>
  );
};

export default WeatherList;
