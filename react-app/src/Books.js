import React from 'react';
import Book from "./Book";

const favouriteBooks = [
  { id: 'id-1', name: 'JS for beginners' },
  { id: 'id-2', name: 'React basics' },
  { id: 'id-3', name: 'React Router overview' },
  { id: 'id-4', name: 'Redux in depth' },
];

const Books = () => {
  return (
    <ul>
      {
        favouriteBooks
          .map((book, i) =>
            <Book key={book.id} title={book.name}/>)}
    </ul>
  );
};

export default Books;
