import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const Wrapper = styled.div`
  background-color: whitesmoke;
  font-size: 12px;
  width: 100%;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 8px;
`;

const Links = styled.div`
  display: flex;
  margin: 0 0 0 8px;
  text-align: center;
`

const Link = styled.button`
  background-color: transparent;
  border: none;
  color: black;
  cursor: pointer;
  :focus {
    outline: none;
  }
  margin: ${props => {
    if (props.firstLink) {
      return '0 8px 0 0';
    }
    else if (props.lastLink) {
      return '0 0 0 8px';
    } else {
      return '0 8px';
    }
  }};
  text-decoration: none;
`;

class Footer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const FooterLink = (props) => (
      <Link 
        {...props}
        firstLink
        onClick={() =>
          this.props.history.push('/' + props.link)
        }
      >
        {props.name}
      </Link>
    );
    return (
      <Wrapper>
        <Container>
          <span>Copyright © 2019 Ali Arshad, Motaz Balghonaim, Jordan Benning, Vladislav Magay, Jackson Pontifex</span>
          <Links>
            <FooterLink firstLink link='about' name='About us'/>
            <FooterLink lastLink link='contact' name='Contact'/>
          </Links>
        </Container>
      </Wrapper>
    )
  }
}

export default withRouter(Footer);