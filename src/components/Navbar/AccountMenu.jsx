import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { withRouter } from 'react-router-dom';

class AccountMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null,
    };
  }

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  handleProfileRedirect = () => {
    this.props.history.push('/profile');
    this.handleMenuClose();
  };

  render() {
    return (
      <IconButton
        aria-owns={this.state.anchorEl ? 'material-appbar' : undefined}
        aria-haspopup="true"
        onClick={this.handleProfileRedirect}
        // onMouseOver={}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
    );
  }
}

export default withRouter(AccountMenu);
