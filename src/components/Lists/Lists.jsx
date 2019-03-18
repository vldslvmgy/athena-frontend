import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import MovieList from '../MovieList';


//mock data
import movies from '../../mock-data/movies';

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
      listType: 'movie',
      showingList: '',
      lists: ["List1", "List2", "List3"]
    };
    this.selectList.bind(this);
  }

  selectList(list) {
    this.setState({
      showingList: list
    })
  }

  clickSpotify = () => {
    this.setState({
      showSpotify: !this.state.showSpotify
    })
  }

  render() {
    const { listType } = this.state;
    const lists = this.state.lists.map((list) =>
      <li>
        <span className="fa-li" >
          {this.state.showingList === list ?
            <Triangle className="fas fa-check-circle"></Triangle>
            :
            <Triangle className="far fa-circle"></Triangle>
          }
        </span>
        <SidebarTitle onClick={() => this.selectList(list)}>{list}</SidebarTitle>
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
          {listType === 'movie' ?
            <MovieList list={movies} />
            : null
          }
        </Section>
        <Section></Section>
      </Wrapper>
    )
  }
}

export default withRouter(Lists);