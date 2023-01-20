import { useState, useEffect } from "react";

import Header from "../../components/Header/Header";
import OpenSearch from "../../components/OpenSearch/OpenSearch";
import BooksShelf from "../../components/BooksShelf/BooksShelf";
import BooksTypes from "../../shared/enums/BooksTypes.enum";
import * as BooksAPI from "../../BooksAPI";
import { BookCardModel } from "../../shared/models/myReads-models.model";

const HomePage = () => {
  const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState<
    (BookCardModel | never)[]
  >([]);
  const [allBooks, setAllBooks] = useState<(BookCardModel | never)[]>([]);
  const [wantToReadBooks, setWantToReadBooks] = useState<
    (BookCardModel | never)[]
  >([]);
  const [readBooks, setReadBooks] = useState<(BookCardModel | never)[]>([]);

  const setAllShelfs = (allShelfs: BookCardModel[]) => {
    setAllBooks(allShelfs);
    setCurrentlyReadingBooks(
      allShelfs.filter((Shelf) => Shelf.shelf === BooksTypes.CURRENTLY_READING)
    );
    setWantToReadBooks(
      allShelfs.filter((Shelf) => Shelf.shelf === BooksTypes.WANT_TO_READ)
    );
    setReadBooks(allShelfs.filter((Shelf) => Shelf.shelf === BooksTypes.READ));
  };

  useEffect(() => {
    const getAllBooks = async () => {
      const res = await BooksAPI.getAll();
      setAllShelfs(res);
    };

    getAllBooks();
  }, []);

  const updateShelfs = (bookId: string, newShelf: string) => {
    allBooks.filter((book) => book.id === bookId)[0].shelf = newShelf;

    setAllShelfs(allBooks);
  };

  return (
    <div className="list-books">
      <Header />

      <div className="list-books-content">
        <div className="list-books-content_wrapper">
          {currentlyReadingBooks.length > 0 && (
            <BooksShelf
              emitShelfChange={(bookId, newShelf) => {
                updateShelfs(bookId, newShelf);
              }}
              shelf={currentlyReadingBooks}
              shelfTitle={"Currently Reading"}
            />
          )}

          {wantToReadBooks.length > 0 && (
            <BooksShelf
              emitShelfChange={(bookId, newShelf) => {
                updateShelfs(bookId, newShelf);
              }}
              shelf={wantToReadBooks}
              shelfTitle={"Want to Read"}
            />
          )}

          {readBooks.length > 0 && (
            <BooksShelf
              emitShelfChange={(bookId, newShelf) => {
                updateShelfs(bookId, newShelf);
              }}
              shelf={readBooks}
              shelfTitle={"Read"}
            />
          )}
        </div>
      </div>

      <OpenSearch />
    </div>
  );
};

export default HomePage;
