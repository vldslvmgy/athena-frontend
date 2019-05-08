import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withRouter } from 'react-router-dom';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const LOGOUT_CALL = gql`
  mutation {
    logout {
      path
    }
  }
`;

const styles = () => ({
  menu: {
    position: 'relative',
    top: '45px'
  }
});

class AccountMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null,
    };
  }

  handleMenuOpen = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  handleProfileRedirect = () => {
    this.props.history.push('/profile');
    this.handleMenuClose();
  };

  handleLogout = () => {
    this.props.logout();
    this.props.history.push('/login');
    this.handleMenuClose();
  };

  handleLogoutError = () => {
    console.log('Could not logout');
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);
    return (
      <div>
        <IconButton
          aria-owns={this.state.anchorEl ? 'material-appbar' : undefined}
          aria-haspopup="true"
          onClick={this.handleMenuOpen}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <div className={classes.menu}>
          <Menu
            anchorEl={anchorEl}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={isMenuOpen}
            onMouseEnter={this.handleMenuOpen}
            onClose={this.handleMenuClose}
          >
            <MenuItem onClick={this.handleProfileRedirect}>
              <p>Profile</p>
            </MenuItem>
            <Mutation
              mutation={LOGOUT_CALL}
              onCompleted={this.handleLogout}
              onError={this.handleLogoutError}
            >
              {callLogout => (
                <MenuItem onClick={(e) => {
                  e.preventDefault();
                  callLogout();
                }}
                >
                  Logout
                </MenuItem>
              )}
            </Mutation>
          </Menu>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.login.user });

const mapDispatchToProps = dispatch => (
  {
    logout: () => dispatch({ type: 'LOGIN', payload: { userId: null, email: null } })
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(withRouter(AccountMenu)));
