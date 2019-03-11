import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const Year = styled.span`
  opacity: 0.6;
`;

class MovieListItem extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { movie } = this.props;

    const primary = (
      <React.Fragment>
        <span>{movie.title}</span>
        <Year>  ({movie.year})</Year>
      </React.Fragment>
    );
    
    return (
      <ListItem button>
        <ListItemText
          primary={primary}
        />
      </ListItem>
    )
  }
}

MovieListItem.propTypes = {
  movie: PropTypes.object
};


export default MovieListItem;