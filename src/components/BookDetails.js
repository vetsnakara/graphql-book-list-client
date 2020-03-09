import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getBookQuery } from "../queries";

const BookDetails = ({ bookId }) => {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: { id: bookId },
    skip: !bookId
  });

  if (!bookId) return <p>No book selected</p>;
  if (loading) return <p>Loading book details ...</p>;
  if (error) return <p>Error while fetch book details</p>;

  const { book } = data;

  return (
    <div id="book-details">
      <h2>{book.name}</h2>
      <p>{book.genre}</p>
      <p>{book.author.name}</p>
      <p>All books by this author:</p>
      <ul className="other-books">
        {book.author.books.map(book => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;
