import React, { Component } from 'react';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Navbar from './components/Navbar/Navbar'
import Lists from './components/Lists/Lists'
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <Layout>
        <Navbar />
        <Router>
          <div>
            <Route path="/profile" component={Profile} />
            <Route path='/lists' component={Lists} />
          </div>
        </Router>
        <Footer />
      </Layout>
    );
  }
}

export default App;