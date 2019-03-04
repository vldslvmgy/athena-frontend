import React, { Component } from 'react';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Lists from './components/Lists/Lists'
import Footer from './components/Footer/Footer';
import styled from 'styled-components';

const Content = styled.div`
  /* position:absolute;
  top:64px; */
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Router>
          <Content>
            <Route path="/profile" component={Profile} />
            <Route path='/lists' component={Lists} />
          </Content>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;