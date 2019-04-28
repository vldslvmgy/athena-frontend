import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const link = new HttpLink({
  uri: 'http://localhost:3000/graphql',
  credentials: 'include',
  includeExtensions: true
});

const Client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

export default Client;
