import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import MovieListItem from './MovieListItem';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const StyledList = styled(List)`
`;

const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class MovieList extends Component {
  constructor(props) {
    super();
    const { list } = props
    this.state = {
      listName: list.listName,
      filteredList: list.listItems,
      searchTerm:""
    };
  }

  componentDidUpdate(prevProps) {
    const { list } = this.props;
    if (list.listName !== prevProps.list.listName) {
      this.setState({
        filteredList: list.listItems,
        searchTerm:""
      })
    }
  }
  filter = event => {
    const { list } = this.props;
    const filteredList = list.listItems.filter(function (listItem) {
      return listItem.title.toLowerCase().startsWith(event.target.value.toLowerCase())
    })
    this.setState({
      listName: list.listName,
      filteredList: filteredList,
      searchTerm:event.target.value
    })
  }

  render() {
    const { classes } = this.props;
    const { listName, filteredList, searchTerm } = this.state;
    return (
      <React.Fragment>
        <Header>
          <h1>{listName}</h1>
          <Fab color="primary" size="small">
            <AddIcon />
          </Fab>
        </Header>
        <TextField
          fullWidth
          id="outlined-filter-input"
          label="Filter"
          className={classes.textField}
          type="filter"
          autoComplete="current-filter"
          margin="normal"
          value={searchTerm}
          variant="outlined"
          onChange={this.filter} />
        <StyledList>
          {
            filteredList.map((movie, index) => {
              return (
                <MovieListItem key={index} movie={movie} />
              )
            })
          }
        </StyledList>
      </React.Fragment>
    );
  }
}

MovieList.propTypes = {
  list: PropTypes.object,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieList);