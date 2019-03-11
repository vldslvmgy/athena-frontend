import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import MovieListItem from './MovieListItem';

const StyledList = styled(List)`
  margin: auto !important;
  min-width: 368px;
  width: 468px;
`;

class MovieList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { list } = this.props;

    return (
      <StyledList>
        {
          list.map((movie, index) => {
            return (
              <MovieListItem key={index} movie={movie} />
            )
          })
        }
      </StyledList>
    )
  }
}

MovieList.propTypes = {
  list: PropTypes.array
};

export default MovieList;