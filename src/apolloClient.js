/* global window */
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';

const link = new HttpLink({
  uri: 'http://localhost:3000/graphql',
  credentials: 'include',
  includeExtensions: true
});

const cache = new InMemoryCache({
  dataIdFromObject: object => object.id || null
});

persistCache({
  cache,
  storage: window.localStorage
});

const Client = new ApolloClient({
  link,
  cache
});

export default Client;
