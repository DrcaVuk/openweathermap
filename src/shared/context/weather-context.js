import { createContext } from "react";

export const WeatherContext = createContext({
    weatherList: [],
    averageTemp: null,
    dateWeather: null,
    colorTemp: [],
    fetchDate: () => {},
    isLoading: null,
    error: null,
    clearError: () => {}
})