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
        <p>{this.props.user ? this.props.user.email : 'not Logged in :('}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.login.user });

export default connect(mapStateToProps)(Profile);
