import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';

const styles = theme => ({
  mediaCard: {
    'margin-top': '2px',
  },
  loginButton: {
    margin: theme.spacing.unit,
    'text-transform': 'none'
  }
});


function MediaCard(props) {
  const { classes, media } = props;

  return (
    <ListItem className={classes.mediaCard}>
      { media.name }
      { media.type }
    </ListItem>
  );
}

export default withStyles(styles)(MediaCard);
