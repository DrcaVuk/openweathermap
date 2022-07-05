import { render, screen } from "@testing-library/react";
import WeatherItem from "./WeatherItem";

describe("test WeatherItem component", () => {
  test("render text in span element", () => {
    render(<WeatherItem />);
    const spanElement = screen.getByText("°C");
    expect(spanElement).toBeInTheDocument();
  });

  test("render text in h4 element", () => {
    render(<WeatherItem day="MONDAY" />);
    const dayElement = screen.getByText("MONDAY");
    expect(dayElement).toBeInTheDocument();
  });

  test("render not found text in h4 elelment", () => {
    render(<WeatherItem day="FREDAY"/>);
    const dayElement = screen.queryByText('MONDAY', {expect: false});
    expect(dayElement).toBeNull();
  })

  test("render temperature in p element", () => {
    render(<WeatherItem temp="40"/>);
    const tempElement = screen.getByText("40");
    expect(tempElement).toBeInTheDocument();
  });

  test("render not found temperature in p element", () => {
    render(<WeatherItem temp="30"/>);
    const tempElement = screen.queryByText('40', {exact: false});
    expect(tempElement).toBeNull();
  });
});