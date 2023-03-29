import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    //jest.fn() is a mock function
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Async />);
    const listItems = await screen.findAllByRole(
      "listitem",
      { exact: false },
      { timeout: 5000 }
    );

    expect(listItems).not.toHaveLength(0);
  });
});
