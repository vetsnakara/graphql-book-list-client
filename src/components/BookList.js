import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getBooksQuery } from "../queries";

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <p>Loading books ...</p>;
  if (error) return <p>Error w/ loading books</p>;

  return (
    <div>
      <ul id="book-list">
        {data.books.map(book => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
