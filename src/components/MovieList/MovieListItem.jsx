import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Collapse from '@material-ui/core/Collapse';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const Year = styled.span`
  opacity: 0.6;
`;

const Details = styled.div`
  display: grid;
  font-size: 14px;
  padding: 11px 16px;
`;

class MovieListItem extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  handleToggleCollapse = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  }

  render() {
    const { movie } = this.props;
    const { open } = this.state;
    const { cast, genres } = movie;

    const primary = (
      <React.Fragment>
        <span>{movie.title}</span>
        <Year>  ({movie.year})</Year>
      </React.Fragment>
    );

    return (
      <React.Fragment>
        <ListItem button onClick={this.handleToggleCollapse}>
          <ListItemText
            primary={primary}
          />
        </ListItem>
        <Collapse in={open}>
          <Details>
            <span>
              Genre:&nbsp;
              {genres.map((genre, index) => {
                return (
                  <span key={index}>{genre}{index < genres.length - 1 ? ', ' : ''}</span>
                )
              })}
            </span>
            <span>
              Cast:&nbsp;
              {cast.map((actor, index) => {
                return (
                  <span key={index}>{actor}{index < cast.length - 1 ? ', ' : ''}</span>
                )
              })}
            </span>
          </Details>
        </Collapse>
      </React.Fragment>
    )
  }
}

MovieListItem.propTypes = {
  movie: PropTypes.object
};


export default MovieListItem;