import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getBookQuery } from "../queries";

const BookDetails = ({ bookId }) => {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: { id: bookId },
    skip: !bookId
  });

  const renderBookDetails = () => {
    if (!bookId) return <p>No book selected</p>;
    if (loading) return <p>Loading book details ...</p>;
    if (error) return <p>Something went wrong</p>;

    const { book } = data;

    return (
      <React.Fragment>
        <h2>{book.name}</h2>
        <p>{book.genre}</p>
        <p>{book.author.name}</p>
        <p>All books by this author:</p>
        <ul className="other-books">
          {book.author.books.map(book => (
            <li key={book.id}>{book.name}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  };

  return <div id="book-details">{renderBookDetails()}</div>;
};

export default BookDetails;
