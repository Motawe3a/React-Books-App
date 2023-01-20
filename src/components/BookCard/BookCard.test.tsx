import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import BookCard from "./BookCard";

describe("BookCard tests", () => {
  it("should render BookCard component", () => {
    const { container } = render(
      <BookCard
        onShelfChange={() => {}}
        bookCard={{
          title: "Learning Web Development with React and Bootstrap",
          authors: ["Harmeet Singh", "Mehul Bhatt"],
          imageLinks: {
            smallThumbnail:
              "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            thumbnail:
              "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
          },
          id: "sJf1vQAACAAJ",
          shelf: "currentlyReading",
        }}
      />
    );

    const bookCard = container.getElementsByClassName("book");

    expect(bookCard).toBeDefined();
    expect(screen.getByText(/Mehul Bhatt/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Learning Web Development with React and Bootstrap/i)
    ).toBeInTheDocument();
  });
});
