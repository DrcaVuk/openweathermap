import React from "react";
import WeatherItem from "../WeatherItem/WeatherItem";
import "./Weather.css";

const Weather = (props) => {
  return (
    <div className="weather">
      <div className="weather_average">
        <p className="weather_date">{props.weatherDate}</p>
        <p className="average">
          {props.averageTemp}
          <span>°C</span>
        </p>
      </div>
      <div className="weather_list">
        {props.weatherData.map((data, index) => (
          <WeatherItem key={index} day={data.day} temp={data.temp} icon={data.icon} />
        ))}
      </div>
    </div>
  );
};

export default Weather;
