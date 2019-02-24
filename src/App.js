import React, { Component } from 'react';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Navbar from './components/Navbar/Navbar'
import Lists from './components/Lists/Lists'
import Footer from './components/Footer/Footer';
import styled from 'styled-components';

const Wrapper = styled.div`
  position:absolute;
  top:64px;
`;

class App extends Component {
  render() {
    return (
      <Layout>
        <Navbar />
        <Router>
          <Wrapper>
            <Route path="/profile" component={Profile} />
            <Route path='/lists' component={Lists} />
          </Wrapper>
        </Router>
        <Footer />
      </Layout>
    );
  }
}

export default App;