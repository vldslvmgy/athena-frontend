import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import MovieList from '../MovieList';


//mock data
import lists from '../../mock-data/lists';

const Directory = styled.div`
  font-size: 16px;
  -webkit-user-select: none; /* webkit (safari, chrome) browsers */
  -moz-user-select: none; /* mozilla browsers */
  -khtml-user-select: none; /* webkit (konqueror) browsers */
  -ms-user-select: none; /* IE10+ */
`;

const ListEntry = styled.li`
  padding-top: 5px;
`;

const SidebarTitle = styled.p`
  cursor: pointer;
  margin: 0;
  padding-right: 100px;
  padding-top: 10px;
  padding-bottom: 10px;
  :hover {
    background-color: whitesmoke;
  }
`;

const StyledList = styled.ul`
  list-style-type: none;
  margin-right: 100px;
`;

const Triangle = styled.i`
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Section = styled.div`
  width: 100%;
`;

class Lists extends Component {
  constructor() {
    super();
    this.state = {
      selectedList: 0,
      lists: lists
    };
    this.selectList.bind(this);
  }

  selectList(listName) {
    console.log(listName)
    const { lists } = this.state;
    const index = lists.findIndex(list => list.listName === listName);

    this.setState({
      selectedList: index
    })
  }

  render() {
    const lists = this.state.lists.map((list) =>
      <li>
        <span className="fa-li" >
          {this.state.lists[this.state.selectedList].listName === list.listName ?
            <Triangle className="fas fa-check-circle"></Triangle>
            :
            <Triangle className="far fa-circle"></Triangle>
          }
        </span>
        <SidebarTitle onClick={() => this.selectList(list.listName)}>{list.listName}</SidebarTitle>
      </li>
    )
    return (

      <Wrapper>
        <Section>

          <Directory>
            <StyledList className="fa-ul">
              {lists}
            </StyledList>
          </Directory>
        </Section>
        <Section>
            <MovieList list={this.state.lists[this.state.selectedList].listItems} />
        </Section>
        <Section />
      </Wrapper>
    );
  }
}

export default withRouter(Lists);
