// import { render, screen } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders Hello World! as text", () => {
  render(<Greeting />);
  const helloWorldElement = screen.getByText("Hello World!");
  expect(helloWorldElement).toBeInTheDocument();
});
