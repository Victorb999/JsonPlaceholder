import { render, screen } from "@testing-library/react";
import Post from "../";

describe("Posts", () => {
  test("should render text initial", () => {
    render(<Post />);

    const text = screen.getByText(/Post/i);

    expect(text).toBeInTheDocument();
  });
});
