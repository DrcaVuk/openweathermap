import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Search from "./Search";

describe("test Search component", () => {
  test("render set default options", () => {
    render(<Search />);
    const selectElement = screen.getByTestId("select-option");
    userEvent.selectOptions(selectElement, "");
    expect(screen.getByRole("option", { name: "" }).selected).toBe(true);
  });

  test('render set "GB" options', () => {
    render(<Search />);
    const selectElement = screen.getByTestId("select-option");
    userEvent.selectOptions(selectElement, "GB");
    expect(screen.getByRole("option", { name: "GB" }).selected).toBe(true);
  });

  test("render writinng text in city element", async () => {
    render(<Search />);
    const inputElement = screen.getByTestId('input-test');
    await userEvent.type(inputElement, "Beograd");
    expect(inputElement.value).toBe("Beograd");
  });

  test("render input placholden", () => {
    render(<Search />);
    const inputElement = screen.getByPlaceholderText(
      "Plase enter your location"
    );
    expect(inputElement).toBeInTheDocument();
  });
});
