import React, { Component } from 'react';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <Layout>
        <Navbar />
        <Router>
          <Route path="/profile" component={Profile} />
        </Router>
        <Footer />
      </Layout>
    );
  }
}

export default App;