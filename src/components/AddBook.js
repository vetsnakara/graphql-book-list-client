import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { getAuthors, addBookMutation, getBooksQuery } from "../queries";

const initState = {
  name: "",
  genre: "",
  authorId: ""
};

const AddBook = () => {
  const [state, setState] = React.useState(initState);

  const { loading, error, data } = useQuery(getAuthors);

  const [
    addBook,
    { loading: loadingAddBook, error: errorAddBook, data: dataAddBook }
  ] = useMutation(addBookMutation);

  if (error) return <p>Error w/ loading authors.</p>;

  const handleChange = ({ target: { name, value } }) => {
    setState(state => ({
      ...state,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { name, genre, authorId } = state;

    addBook({
      variables: {
        name,
        genre,
        authorId
      },
      refetchQueries: [{ query: getBooksQuery }]
    });

    setState(initState);
  };

  const validate = () => {
    return state.name && state.genre && state.authorId;
  };

  return (
    <form id="add-book" onSubmit={handleSubmit}>
      <div className="field">
        <label>Book name:</label>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label>Genre</label>
        <input
          type="text"
          name="genre"
          value={state.genre}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label>Author:</label>
        <select name="authorId" value={state.authorId} onChange={handleChange}>
          <option key="unselected" value="">
            Select an author
          </option>
          {!loading &&
            data.authors.map(author => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
        </select>
      </div>

      <button type="submit" disabled={!validate()}>
        +
      </button>
    </form>
  );
};

export default AddBook;
