import React, { PureComponent } from 'react';
import { Redirect, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Lists from './components/Lists/Lists';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';

const Content = styled.div`
  margin-bottom:40px;
`;

class App extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Router>
          <Content>
            <Route exact path="/" render={() => (<Redirect to="/login" />)} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/lists" component={Lists} />
          </Content>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
