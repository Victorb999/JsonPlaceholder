import { render, screen } from "@testing-library/react";
import Home from "../";
import React from "react";
import { BrowserRouter } from "react-router-dom";

describe("Home", () => {
  test("should render text initial", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const text = screen.getByText(/Welcome to/i);

    expect(text).toBeInTheDocument();
  });
});
