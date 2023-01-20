import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import BooksShelf from "./BooksShelf";

describe("BooksShelf tests", () => {
  it("should render BooksShelf component with empty shelf", () => {
    const { container } = render(
      <BooksShelf emitShelfChange={() => {}} shelf={[]} shelfTitle={"Read"} />
    );
    const mainDiv = container.getElementsByClassName("bookshelf");
    expect(mainDiv).toBeDefined();
    expect(screen.getByText(/Read/i)).toBeInTheDocument();
  });

  it("should render BooksShelf component with one book", () => {
    const { container } = render(
      <BooksShelf
        emitShelfChange={() => {}}
        shelf={[
          {
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
          },
        ]}
        shelfTitle={"want to read"}
      />
    );

    const mainDiv = container.getElementsByClassName("bookshelf-title");
    const bookCards = container.getElementsByClassName("book");

    expect(mainDiv).toBeDefined();
    expect(bookCards).toBeDefined();
    expect(bookCards.length).toEqual(1);
    expect(screen.getByText(/Mehul Bhatt/i)).toBeInTheDocument();
  });
});
