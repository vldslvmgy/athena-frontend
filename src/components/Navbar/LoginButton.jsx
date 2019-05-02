import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  login: {
    'margin-top': '2px',
    'font-size': 'medium',
    'font-weight': 800,

  },
  loginButton: {
    margin: theme.spacing.unit,
    'text-transform': 'none'
  }
});


function LoginButton(props) {
  const { classes } = props;

  return (
    <Button
      variant="outlined"
      color="inherit"
      className={classes.loginButton}
      onClick={props.handleLoginRedirect}
    >
      <Typography color="inherit" noWrap className={classes.login}>
        Login
      </Typography>
    </Button>
  );
}

LoginButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginButton);
