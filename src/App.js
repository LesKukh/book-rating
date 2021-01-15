import React, { useState } from "react";
import bookData from "./book-data.json";
import BookList from "./BookList.js";

export default function App() {
  const [books, setBooks] = useState(bookData);

  const rateBook = (id, rating) => {
    const newBooks = books.map((book) =>
      book.id === id ? { ...book, rating } : book
    );
    setBooks(newBooks);
  };

  return <BookList books={books} onRateBook={rateBook} />;
}
