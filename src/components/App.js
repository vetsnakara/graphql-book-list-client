import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import BookList from "./BookList";
import AddBook from "./AddBook";

console.log(process.env.GQL_URI);

const client = new ApolloClient({
  uri: process.env.GQL_URI
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Reading List</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
};

export default App;
