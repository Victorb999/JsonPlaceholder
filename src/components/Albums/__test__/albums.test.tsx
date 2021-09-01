import { render, screen } from "@testing-library/react";
import Albums from "../";

describe("Albums", () => {
  test("should render text initial", () => {
    render(<Albums />);

    const text = screen.getByText(/albums/i);

    expect(text).toBeInTheDocument();
  });

  // test("should render 100 albums", async () => {
  //   act(() => {
  //     render(<Albums />);
  //   });

  //   const text = screen.getAllByText(/album/i);

  //   console.log(text.length);
  //   expect(text.length).toEqual(100);
  // });
});
