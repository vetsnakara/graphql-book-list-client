import ApolloClient from "apollo-boost";
import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";

import BookList from "./BookList";

const client = new ApolloClient({
  // todo: use env variable
  uri: "http://localhost:4000/graphql"
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Reading List</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
};

export default App;
