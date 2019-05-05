import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Search extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>{this.props.location.search}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.login.user });

export default connect(mapStateToProps)(withRouter(Search));
