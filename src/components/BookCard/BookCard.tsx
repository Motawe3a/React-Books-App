import { useState } from "react";

import * as BooksAPI from "../../BooksAPI";
import BooksTypes from "../../shared/enums/BooksTypes.enum";
import {
  BookCardProps,
  ShelvesModel,
  BookCardModel,
} from "../../shared/models/myReads-models.model";

const BookCard: React.FC<BookCardProps> = (props: BookCardProps) => {
  /** Dunmmy state for component reloading purpose */
  const [, setMode] = useState("initial");

  /** Available shelves options */
  const shelves: ShelvesModel[] = [
    { shelfName: "", shelfDisplayName: "Move to..." },
    {
      shelfName: BooksTypes.CURRENTLY_READING,
      shelfDisplayName: "Currently Reading",
    },
    { shelfName: BooksTypes.WANT_TO_READ, shelfDisplayName: "Want to Read" },
    { shelfName: BooksTypes.READ, shelfDisplayName: "Read" },
    { shelfName: BooksTypes.NONE, shelfDisplayName: "None" },
  ];

  const updateBookShelf = async (
    book: BookCardModel,
    newShelf: string
  ): Promise<void> => {
    await BooksAPI.update(book, newShelf);
    props.bookCard.shelf = newShelf;
    setMode("reload");
    window.location.pathname === "/search"
      ? props.onShelfChange(props.bookCard, newShelf)
      : props.onShelfChange(book, newShelf);
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${props.bookCard?.imageLinks?.thumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              value={props.bookCard.shelf}
              onChange={(e) => {
                updateBookShelf(props.bookCard, e.target.value);
              }}
            >
              {shelves.map((shelve, index) => (
                <option
                  key={index}
                  value={shelve.shelfName}
                  disabled={index === 0}
                >
                  {shelve.shelfDisplayName}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="book-title">{props.bookCard.title}</div>
        {props.bookCard.authors &&
          props.bookCard.authors.length > 0 &&
          props.bookCard.authors.map((author, i) => (
            <div key={"author" + i} className="book-authors">
              {author}
            </div>
          ))}
      </div>
    </li>
  );
};

export default BookCard;
