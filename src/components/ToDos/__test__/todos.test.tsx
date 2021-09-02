import { render, screen } from "@testing-library/react";
import ToDos from "../";

describe("Todos", () => {
  test("should render text initial", () => {
    render(<ToDos />);

    const text = screen.getByText(/todo/i);

    expect(text).toBeInTheDocument();
  });
  test("should render 200 todos", async () => {
    render(<ToDos />);
    const text = await screen.findAllByText(/To do #/i);

    expect(text.length).toEqual(200);
  });
});
