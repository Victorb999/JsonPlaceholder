import { render, screen } from "@testing-library/react";
import ToDos from "../";

describe("Todos", () => {
  test("should render text initial", () => {
    render(<ToDos />);

    const text = screen.getByText(/todo/i);

    expect(text).toBeInTheDocument();
  });
});
