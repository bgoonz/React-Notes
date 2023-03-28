import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    render(<Async />);
      const listItems = await screen.findAllByRole( "listitem", { exact: false } , { timeout: 5000 } );
      
        expect( listItems ).not.toHaveLength( 0 );
  });
});
