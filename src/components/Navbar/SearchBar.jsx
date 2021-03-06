import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import { withRouter } from 'react-router-dom';
import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 300,
      '&:focus': {
        width: 500,
      },
    },
  }
});

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  handleSubmit= (event) => {
    event.preventDefault();
    const search = `?k=${this.state.search}`;
    this.props.history.push({
      pathname: '/search',
      search
    });
  };

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.search}>
        <form onSubmit={this.handleSubmit}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <Input
            onChange={this.handleChange}
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </form>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(SearchBar));
