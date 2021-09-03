import { render, screen } from "@testing-library/react";
import ThemeSelector from "../";

describe("Theme", () => {
  test("should render input", () => {
    render(<ThemeSelector />);

    const imgs = screen.getAllByRole(/img/i);

    expect(imgs.length).toEqual(2);
  });
});
