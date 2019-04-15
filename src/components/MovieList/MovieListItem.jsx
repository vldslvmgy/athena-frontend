import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const DetailsFooter = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding-top: 6px;
`;

const Details = styled.div`
  display: grid;
  font-size: 14px;
  grid-row-gap: 6px;
  padding: 11px 16px;
`;

const Year = styled.span`
  opacity: 0.6;
`;

class MovieListItem extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  handleToggleCollapse() {
    this.setState(prevState => ({ open: !prevState.open }));
  }

  render() {
    const { movie } = this.props;
    const { open } = this.state;
    const { cast, genres } = movie;

    const primary = (
      <React.Fragment>
        <span>{movie.title}</span>
        <Year>
          (
          {movie.year}
          )
        </Year>
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
              {genres.map((genre, index) => (
                <span key={index}>
                  {genre}
                  {index < genres.length - 1 ? ', ' : ''}
                </span>
              ))}
            </span>
            <span>
              Cast:&nbsp;
              {cast.map((actor, index) => (
                <span key={index}>
                  {actor}
                  {index < cast.length - 1 ? ', ' : ''}
                </span>
              ))}
            </span>
            <DetailsFooter>
              <Button variant="contained" color="secondary" size="small">
                Delete
                <DeleteIcon />
              </Button>
            </DetailsFooter>
          </Details>
        </Collapse>
      </React.Fragment>
    );
  }
}

MovieListItem.propTypes = {
  movie: PropTypes.object
};


export default MovieListItem;
