import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import MovieListItem from './MovieListItem';

const StyledList = styled(List)`
`;

const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

class MovieList extends Component {
  constructor(props) {
    super();
    this.state = {
      filteredList: props.listItems,
      searchTerm: ''
    };
  }

  filter = (event) => {
    // const { list } = this.props;
    const filteredList = this.props.listItems.filter(listItem => (
      // let words = listItem.title.toLowerCase().split(" ");
      listItem.title.toLowerCase().includes(event.target.value.toLowerCase())
    ));
    // let searchWords = event.target.value.toLowerCase().split(" ")
    // return words.some((word)=>{
    //   return word.startsWith(event.target.value.toLowerCase())
    // })
    // );
    this.setState({
      filteredList,
      searchTerm: event.target.value
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.listName !== this.props.listName) {
      this.setState({
        filteredList: nextProps.listItems
      });
    }
  }

  render() {
    const { filteredList, searchTerm } = this.state;
    return (
      <React.Fragment>
        <Header>
          <h1>{this.props.listName}</h1>
          <Fab color="primary" size="small">
            <AddIcon />
          </Fab>
        </Header>
        <TextField
          fullWidth
          id="outlined-filter-input"
          label="Filter"
          type="filter"
          autoComplete="current-filter"
          margin="normal"
          value={searchTerm}
          variant="outlined"
          onChange={this.filter}
        />
        <StyledList>
          {
            filteredList.map((movie, index) => (
              <MovieListItem key={index} movie={movie} />
            ))
          }
        </StyledList>
      </React.Fragment>
    );
  }
}

MovieList.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.object),
  listName: PropTypes.string,
};

export default MovieList;
