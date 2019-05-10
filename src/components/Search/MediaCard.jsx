import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  mediaCard: {
    'margin-top': '2px',
    width: '66%'
  },
  titleText: {
    'font-family': 'Arial, Helvetica, sans-serif'
  }
});


function MediaCard(props) {
  const { classes, media } = props;

  return (
    <ListItem className={classes.mediaCard}>
      <Typography variant="h6" gutterBottom className={classes.titleText}>
        { media.name }
      </Typography>
      <Typography variant="h6" gutterBottom>
        { media.type }
      </Typography>
    </ListItem>
  );
}

export default withStyles(styles)(MediaCard);
