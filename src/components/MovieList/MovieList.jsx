import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import MovieListItem from './MovieListItem';

const StyledList = styled(List)`
`;

const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

class MovieList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { list } = this.props;

    return (
      <React.Fragment>
        <Header>
          <h1>
            Vlad's List
          </h1>
          <Fab color="primary" size="medium">
            <AddIcon />
          </Fab>
        </Header>
        <StyledList>
          {
            list.map((movie, index) => <MovieListItem key={index} movie={movie} />)
          }
        </StyledList>
      </React.Fragment>
    )
  }
}

MovieList.propTypes = {
  list: PropTypes.array
};

export default MovieList;