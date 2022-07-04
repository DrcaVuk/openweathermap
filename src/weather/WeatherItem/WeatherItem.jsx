import "./WeatherItem.css";

const WeatherItem = (props) => {
  return (
    <div className="weather_item">
      <h4>{props.day}</h4>
      <p>
        {props.temp}
        <span>°C</span>
      </p>
      <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="weather icon"/>
    </div>
  );
};

export default WeatherItem;
