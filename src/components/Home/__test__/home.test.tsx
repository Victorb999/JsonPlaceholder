import { render, screen } from "@testing-library/react";
import Home from "../";

describe("Home", () => {
  test("should render text initial", () => {
    render(<Home />);

    const text = screen.getByText(/Welcome to/i);

    expect(text).toBeInTheDocument();
  });
});
