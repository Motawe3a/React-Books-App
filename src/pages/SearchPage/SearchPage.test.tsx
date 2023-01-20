import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import SearchPage from "./SearchPage";

describe("SearchPage tests", () => {
  it("should render SearchPage component", () => {
    const { container } = render(<SearchPage />, { wrapper: BrowserRouter });

    const mainDiv = container.getElementsByClassName("search-books");
    const searchInput = container.getElementsByTagName("input");

    expect(mainDiv).toBeDefined();
    expect(searchInput).toBeDefined();
    expect(screen.getByText(/close/i)).toBeInTheDocument();
  });
});
