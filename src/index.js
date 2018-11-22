import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloClient } from 'apollo-client';
import { withClientState } from 'apollo-link-state';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { resolvers, defaults } from './resolvers/resolvers';

// Define our type and our mutation
const typeDefs = `
  type Todo {
    id: Int!
    text: String!
    completed: Boolean!
  }
  type Mutation {
    addTodo(text: String!): Todo
    toggleTodo(id: Int!): Todo
  }
  type Query {
    visibilityFilter: String
    todos: [Todo]
  }
`;

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  link: withClientState({
    resolvers,
    defaults,
    cache,
    typeDefs

  }),
});
ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
