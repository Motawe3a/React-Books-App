import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import HomePage from "./HomePage";

describe("HomePage tests", () => {
  it("should render HomePage component", () => {
    const { container } = render(<HomePage />, { wrapper: BrowserRouter });

    const header = container.getElementsByClassName("list-books-title");
    const mainDiv = container.getElementsByClassName("list-books-content");

    expect(header).toBeDefined();
    expect(mainDiv).toBeDefined();
  });
});
