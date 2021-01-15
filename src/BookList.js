import React from "react";
import Book from "./Book";

export default function BookList({ books = [], onRateBook = (f) => f }) {
  if (!books.length) return <div>No Books Listed. (Add a Book)</div>;

  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} {...book} onRate={onRateBook} />
      ))}
    </div>
  );
}
