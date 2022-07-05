import { render, screen } from "@testing-library/react";

import LoadingSpinner from "./LoadingSpinner";

describe("test LoadingSpinner component", () => {
    test('render  data-testid="lodading_spinner-test"', () => {
        render(<LoadingSpinner/>);
        const loadElement = screen.getByTestId("lodading_spinner-test");
        expect(loadElement).toBeInTheDocument()
    })
})