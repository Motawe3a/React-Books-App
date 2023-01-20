import { BookCardModel } from "../../shared/models/myReads-models.model";
import BookCard from "../BookCard/BookCard";

/** BooksShelfProps */
interface BooksShelfProps {
  shelfTitle: string;
  shelf: BookCardModel[];
  emitShelfChange: (bookId: string, newShelf: string) => void;
}

const BooksShelf = (props: BooksShelfProps) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.shelf.map((book) => (
            <BookCard
              key={book.id}
              bookCard={book}
              onShelfChange={(book, newShelf) => {
                props.emitShelfChange(book.id, newShelf);
              }}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BooksShelf;
