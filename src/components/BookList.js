import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getBooksQuery } from "../queries";

import BookDetails from "./BookDetails";

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);
  const [selected, setSelected] = React.useState(null);

  const handleBookSelect = id => {
    setSelected(id);
  };

  if (loading) return <p>Loading books ...</p>;
  if (error) return <p>Error w/ loading books</p>;

  return (
    <div>
      <ul id="book-list">
        {data.books.map(book => (
          <li key={book.id} onClick={() => handleBookSelect(book.id)}>
            {book.name}
          </li>
        ))}
      </ul>
      <BookDetails bookId={selected} />
    </div>
  );
};

export default BookList;
