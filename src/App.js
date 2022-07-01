import React, { useState } from "react";
import axios from "axios";
import { useHttpClient } from "./shared/hooks/http-hook";
import { useDateTime } from "./shared/hooks/date-hook";
import { api_url } from "./variable";
import datePars from "./shared/helpers/datePars";

import Search from "./components/Search/Search";
import Weather from "./weather/Weather/Weather";
import LoadingSpinner from "./shared/components/LoadingSpinner/LoadingSpinner";
import ErrorModal from "./shared/components/ErrorModal/ErrorModal";

import "./App.css";

function App() {
  const [style, setStyle] = useState(
    "linear-gradient(150deg, rgba(209, 228, 242, 1) 50%, rgba(224, 219, 155, 1) 100%)"
  );
  const [weatherDate, setWeatherDate] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [averageTemp, setAverageTemp] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [city, setCity] = useState("");
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const datetime = useDateTime();

  axios.defaults.baseURL = api_url;
  axios.defaults.headers = { "Content-Type": "application/json" };

  const fetchData = async () => {
    if (countryCode === "" || city === "") return;
    let res;
    let averageColor = 0;
    res = await sendRequest(
      `/data/2.5/forecast?q=${city},${countryCode}&units=metric&`
    );
    let filterTime = [];
    res.data.list.filter((d) => {
      let arrayTime = new Date(d.dt_txt);

      if (arrayTime.getHours() == 12 && true) {
        averageColor += d.main.temp;
        filterTime.push({
          day: datetime.getDay(d.dt_txt),
          temp: d.main.temp.toFixed(0),
          icon: d.weather[0].icon,
        });
      }
    });
    averageColor /= filterTime.length;
    setAverageTemp(averageColor.toFixed(0));
    let stringDate = datePars(
      datetime.getFullDate(res.data.list[0].dt_txt),
      datetime.getFullDate(res.data.list[res.data.list.length - 1].dt_txt)
    );
    let date2 = datetime.getFullDate(
      res.data.list[res.data.list.length - 1].dt_txt
    );
    setWeatherDate(stringDate);
    let p = ((80 - averageColor) * 100) / 80 / 100;
    let r = (16 + 255) / (2 * p);
    let g = (57 + 148) / (2 * p);
    let b = (136 + 86) / (2 * p);
    setStyle(
      `linear-gradient(150deg, rgba(209, 228, 242, 1) 50%, rgba(${r}, ${g}, ${b}, 1) 100%)`
    );
    setWeatherData(filterTime);
  };

  return (
    <div className="App" style={{ background: style }}>
      {error && <ErrorModal onClick={clearError} error={error} />}
      <Search
        fetchData={fetchData}
        countryCode={countryCode}
        setCountryCode={setCountryCode}
        city={city}
        setCity={setCity}
      />
      {isLoading && <LoadingSpinner />}
      {!isLoading && weatherData.length > 0 && (
        <Weather
          weatherDate={weatherDate}
          weatherData={weatherData}
          averageTemp={averageTemp}
        />
      )}
    </div>
  );
}
export default App;
