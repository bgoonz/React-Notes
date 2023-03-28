// import { render, screen } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World! as text", () => {
    render(<Greeting />);
    const helloWorldElement = screen.getByText("Hello World!", {
      exact: false,
    });
    expect(helloWorldElement).toBeInTheDocument();
  } );
    test( "renders 'Nice to meet you!' if the button was NOT clicked", () => {
        render( <Greeting /> );
        const outputElement = screen.getByText( 'Nice to meet you!', { exact: false } );
        expect( outputElement ).toBeInTheDocument();
    } )
    test( "renders 'Changed!' if the button was clicked", () => {
        render( <Greeting /> );
        const buttonElement = screen.getByRole( 'button' );
        buttonElement.click();
        const outputElement = screen.getByText( 'Changed!', { exact: false } );
        expect( outputElement ).toBeInTheDocument();
    } )
    test( "does not render 'Nice to meet you!' if the button was clicked", () => {
        render( <Greeting /> );
        const buttonElement = screen.getByRole( 'button' );
        buttonElement.click();
        const outputElement = screen.queryByText( 'Nice to meet you!', { exact: false } );
        expect( outputElement ).toBeNull();
    })
});



