import { render, screen } from "@testing-library/react";
import Post from "../";

describe("Posts", () => {
  test("should render text initial", () => {
    render(<Post />);

    const text = screen.getByText(/Post/i);

    expect(text).toBeInTheDocument();
  });
  test("should render 100 posts", async () => {
    render(<Post />);
    const text = await screen.findAllByText(/Post #/i);

    expect(text.length).toEqual(100);
  });
});
