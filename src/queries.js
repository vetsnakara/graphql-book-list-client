import { gql } from "apollo-boost";

export const getAuthors = gql`
  {
    authors {
      name
      id
    }
  }
`;

export const getBooksQuery = gql`
  {
    books {
      id
      name
    }
  }
`;

export const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
    }
  }
`;
