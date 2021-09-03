import { render, screen } from "@testing-library/react";
import Header from "../";
import React from "react";
import { BrowserRouter } from "react-router-dom";

describe("Home", () => {
  test("should render text initial", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const text = screen.getByText(/json/i);

    expect(text).toBeInTheDocument();
  });
});
