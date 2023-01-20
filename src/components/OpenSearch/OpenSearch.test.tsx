import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import OpenSearch from "./OpenSearch";

describe("OpenSearch tests", () => {
  it("should render OpenSearch component", () => {
    const { container } = render(<OpenSearch />, { wrapper: BrowserRouter });
    const mainDiv = container.getElementsByClassName("open-search");

    expect(mainDiv).toBeDefined();
    expect(screen.getByText(/Add a book/i)).toBeInTheDocument();
  });
});
