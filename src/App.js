import React, { Component } from 'react';
import { Redirect, Route } from 'react-router';
import { Provider } from 'react-redux';
import { ApolloProvider, Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Client from './apolloClient';
import store from './redux/store';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Lists from './components/Lists/Lists';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';

const IS_LOGGED_IN = gql`
  {
    me {
      id
      email
    }
  }
`;

const Content = styled.div`
  margin-bottom:40px;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleLoggedIn = (credentials) => {
    const { id, email } = credentials.me;
    store.dispatch({ type: 'LOGIN', payload: { userId: id, email } });
  }

  handleError = () => {
    store.dispatch({ type: 'LOGIN', payload: { userId: null, email: null } });
  }

  render() {
    return (
      <React.Fragment>
        <ApolloProvider client={Client}>
          <Query
            query={IS_LOGGED_IN}
            onCompleted={this.handleLoggedIn}
            onError={this.handleError}
          >
            {() => null}
          </Query>
          <Provider store={store}>
            <Navbar />
            <Content>
              <Route exact path="/" render={() => (<Redirect to="/login" />)} />
              <Route path="/login" render={() => (<Login />)} />
              <Route path="/profile" render={() => (<Profile />)} />
              <Route exact path="/search" render={() => (<Search />)} />
              <Route path="/lists" component={Lists} />
            </Content>
            <Footer />
          </Provider>
        </ApolloProvider>
      </React.Fragment>
    );
  }
}

export default App;
