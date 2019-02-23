import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const Container = styled.div`
  align-items: left;
  display: flex;
  justify-content: space-between;
  padding: 8px;
`

class Lists extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container>
        <p>lalala</p>
      </Container>
    )
  }
}

export default Lists;