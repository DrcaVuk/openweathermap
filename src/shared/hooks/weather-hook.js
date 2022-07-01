import { useState, useCallback } from "react";
import { useDateTime } from "./date-hook";
import { useHttpClient } from "./http-hook";
import dateHelpers from "../helpers/dateHelpers";

export const useWeatherHook = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const dataTime = useDateTime();
  const [dateWeather, setDateWeather] = useState("");
  const [weatherList, setWeatherList] = useState([]);
  const [averageTemp, setAverageTemp] = useState("");
  const [colorTemp, setColorTemp] = useState({ r: 0, g: 0, b: 0 });

  const fetchData = useCallback(async (city, countryCode) => {
    if (city === "" || countryCode === "") return;
    let res = await sendRequest(
      `/data/2.5/forecast?q=${city},${countryCode}&units=metric&`
    );
    let filterData = [];
    let average = 0;
    res.data.list.filter((item) => {
      let itemTime = new Date(item.dt_txt);
      if (itemTime.getHours() === 12) {
        average += item.main.temp;
        filterData.push({
          day: dataTime.getDay(item.dt_txt),
          temp: item.main.temp.toFixed(0),
          icon: item.weather[0].icon,
        });
      }
      //setovati prosecnu temperaturu
      setAverageTemp((average / (filterData.length - 1)).toFixed(0))
      //datum od kad do kad
      setDateWeather(
        dateHelpers(
          dataTime.getFullDate(res.data.list[0].dt_txt),
          dataTime.getFullDate(res.data.list[res.data.list.length - 1].dt_txt)
        )
      );
    });
    setWeatherList(filterData);
  }, []);

  return {
    weatherList,
    averageTemp,
    dateWeather,
    fetchData,
    isLoading,
    error,
    clearError,
  };
};
