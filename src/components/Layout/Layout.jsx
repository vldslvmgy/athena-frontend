import React, { Component } from 'react';

class Layout extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Layout;