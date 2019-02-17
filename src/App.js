import React, { Component } from 'react';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout/Layout';


class App extends Component {
  render() {
    return (
      <Layout>
        <Router>
          <Route path="/profile" component={Profile} />
        </Router>
      </Layout>
    );
  }
}

export default App;