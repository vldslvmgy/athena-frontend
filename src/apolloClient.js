import ApolloClient from 'apollo-boost';

const Client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
});

export default Client;
