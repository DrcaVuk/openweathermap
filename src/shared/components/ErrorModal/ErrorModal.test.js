import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ErrorModal from "./ErrorModal";

describe('test ErrorModal component', () => {
  test('render text "Error" and "Close"', () => {
    render(<ErrorModal/>);
    const errorElement = screen.getByText("Error");
    const closeElement = screen.getByText("Close");
    const buttonElement = screen.getByTestId("clearError");
    expect(errorElement).toBeInTheDocument();
    expect(closeElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test('render props error message', () => {
    render(<ErrorModal error="test message" />);
    const errorElement = screen.getByText('test message');
    expect(errorElement).toBeInTheDocument();
  })

  test('testing button was not clicked', () => {
    const handler = jest.fn();
    render(<ErrorModal onClick={handler} />);
    const buttonElement = screen.getByRole('button');
    expect(handler.mock.calls.length).toEqual(0);
  })

  test('testing button was clicked', () => {
    const handler = jest.fn();
    render(<ErrorModal onClick={handler} />);
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    expect(handler.mock.calls.length).toEqual(1);
  })
})