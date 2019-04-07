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
    this.state = {
      filteredList: props.list.listItems,
      isFiltered: false
    };
  }

  componentDidUpdate(prevProps) {
    const { list } = this.props;
    if (list.listName !== prevProps.list.listName) {
      this.setState({
        filteredList: list.listItems
      })
    }
  }
  filter = event => {
    const { list } = this.props;
    const filteredList = list.listItems.filter(function (listItem) {
      return listItem.title.startsWith(event.target.value)
    })
    this.setState({
      isFiltered: true,
      filteredList: filteredList
    })
  }

  render() {
    const { classes } = this.props;
    const { list } = this.props;
    const { filteredList } = this.state;
    return (
      <React.Fragment>
        <Header>
          <h1>{list.listName}</h1>
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
    )
  }
}

MovieList.propTypes = {
  list: PropTypes.object,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieList);