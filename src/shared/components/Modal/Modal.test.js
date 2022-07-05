import { render, screen } from "@testing-library/react";

import Modal from "./Modal";

describe("test Modal component", () => {
    test('render text "testing"', () => {
        render(<Modal>testing</Modal>);
        const childrenElement = screen.getByText('testing');
        expect(childrenElement).toBeInTheDocument();
    });
})