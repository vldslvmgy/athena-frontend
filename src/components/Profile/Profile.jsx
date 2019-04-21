import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>{this.props.isLoggedIn ? 'Logged In!' : 'not Logged in :('}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({ isLoggedIn: state.login.isLoggedIn });

export default connect(mapStateToProps)(Profile);
