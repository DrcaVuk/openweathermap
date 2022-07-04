import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import WeatherItem from "./WeatherItem";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without props", () => {
    act(() => {
        render(<WeatherItem />, container);
    })
    expect(container.textContent).toBe("°C")

    act(() => {
        render(<WeatherItem day="MONDAY" temp="40" />, container);
    })
    expect(container.textContent).toBe("MONDAY40°C")
})