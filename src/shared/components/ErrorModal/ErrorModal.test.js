import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ErrorModal from "./ErrorModal";

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

it("ErrorModal component", () => {
  act(() => {
    render(<ErrorModal />, container);
  });
  expect(container.textContent).toBe("ErrorClose");

  act(() => {
    render(<ErrorModal error="component test" />, container);
  });
  expect(container.textContent).toBe("Errorcomponent testClose");

  it("Button onClick", () => {
    const onClick = jest.fn();
    act(() => {
      render(<ErrorModal onClick={onClick}/>, container);
    });

    act(() => {
        container
        .querySelector("data-testid=['clearError']")
      .dispatchEvent(new MouseEvent("click", { bubbles: true }));
    })
  });
  expect(onClick).toHaveBeenCalledWith('clearError');
});
