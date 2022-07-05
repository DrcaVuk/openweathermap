import { render, screen } from "@testing-library/react";
import Weather from "./Weather";

describe("test Weather componet", ()=>{
    test('render "weater-test"', () => {
        render(<Weather/>);
        const weaterElement = screen.getByTestId("weater-test");
        expect(weaterElement).toBeInTheDocument();
    });

    test('render not find "°C"', ()  => {
        render(<Weather/>);
        const spanElement = screen.queryByText('°C', {exact: false});
        expect(spanElement).toBeNull();
    })
})