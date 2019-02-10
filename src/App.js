import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/profile" component={Profile} />
      </Router>
    );
  }
}

export default App;