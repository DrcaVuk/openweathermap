import { render, screen } from "@testing-library/react";

import { WeatherContext } from "../../shared/context/weather-context";
import WeatherList from "./WeatherList";

describe("test WeatherList component", () => {
    test("render default value", () => {
        const contextValue = { weatherList: [{day: 'MONDAY', temp: '20', icon: '01d'}]};
        const wrapper = ({children}) => {
            <WeatherContext.Provider value={contextValue}>
                {children}
            </WeatherContext.Provider>
        }
        render(<WeatherList />, {wrapper});
        const dayElement = screen.queryByText("MONDAY", {exact:false});
        expect(dayElement).toBeNull();
    })
});