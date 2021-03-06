import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import MovieList from '../MovieList';

// mock data
import lists from '../../mock-data/lists';

const Directory = styled.div`
position:relative;
  font-size: 16px;
  -webkit-user-select: none; /* webkit (safari, chrome) browsers */
  -moz-user-select: none; /* mozilla browsers */
  -khtml-user-select: none; /* webkit (konqueror) browsers */
  -ms-user-select: none; /* IE10+ */
`;

const ButtonWrapper = styled.div`
  margin-top:20px;
  height:20%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
position:absolute;
width:90%;
  list-style-type: none;
  margin-right: 100px;
  margin-left:10%;
`;

const Circle = styled.i`
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
      lists,
      showAll: false,
      allList: {
        listName: 'All List',
        listItems: []
      }
    };
    this.selectList.bind(this);
  }

  showAll = () => {
    const { allList } = this.state;
    if (allList.listItems.length === 0) {
      this.state.lists.forEach((list) => {
        list.listItems.forEach((entry) => {
          allList.listItems.push(entry);
        });
      });
    }
    this.setState({
      showAll: true,
      allList
    });
  }

  selectList(listName) {
    // const { lists } = this.state;
    const index = lists.findIndex(list => list.listName === listName);

    this.setState({
      selectedList: index,
      showAll: false
    });
  }

  render() {
    const { allList, showAll } = this.state;
    const listTitles = this.state.lists.map(list => (
      <li key={list.listName}>
        <span className="fa-li">
          {this.state.lists[this.state.selectedList].listName === list.listName && !showAll
            ? <Circle className="fas fa-check-circle" />
            : <Circle className="far fa-circle" />
          }
        </span>
        <SidebarTitle onClick={() => this.selectList(list.listName)}>{list.listName}</SidebarTitle>
      </li>
    ));
    return (

      <Wrapper>
        <Section>

          <Directory>
            <ButtonWrapper>
              <Button onClick={this.showAll} variant="contained" color="primary">SHOW ALL</Button>
            </ButtonWrapper>
            <StyledList className="fa-ul">
              {listTitles}
            </StyledList>
          </Directory>
        </Section>
        <Section>
          <MovieList
            listItems={
            showAll
              ? allList.listItems : this.state.lists[this.state.selectedList].listItems
          }
            listName={
            showAll
              ? allList.listName : this.state.lists[this.state.selectedList].listName
          }
          />
        </Section>
        <Section />
      </Wrapper>
    );
  }
}

export default withRouter(Lists);
