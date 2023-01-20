import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "./Header";

describe("Header tests", () => {
  it("should render Header component", () => {
    const { container } = render(<Header />);
    const mainDiv = container.getElementsByClassName("list-books-title");

    expect(mainDiv).toBeDefined();
    expect(screen.getByText(/MyReads/i)).toBeInTheDocument();
  });
});
