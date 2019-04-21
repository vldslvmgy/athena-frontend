import React from 'react';
import { Redirect, Route } from 'react-router';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import styled from 'styled-components';
import Client from './apolloClient';
import store from './redux/store';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Lists from './components/Lists/Lists';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';

const Content = styled.div`
  margin-bottom:40px;
`;

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <ApolloProvider client={Client}>
        <Provider store={store}>
          <Router>
            <Content>
              <Route exact path="/" render={() => (<Redirect to="/login" />)} />
              <Route path="/login" component={Login} />
              <Route path="/profile" component={Profile} />
              <Route path="/lists" component={Lists} />
            </Content>
          </Router>
          <Footer />
        </Provider>
      </ApolloProvider>
    </React.Fragment>
  );
}

export default App;
