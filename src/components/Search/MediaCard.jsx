import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = () => ({
  mediaCard: {
    'margin-top': '2px',
    width: '66%'
  },
  titleText: {
    'font-family': 'Arial, Helvetica, sans-serif'
  },
  typeText: {
    'font-family': 'Arial, Helvetica, sans-serif',
    color: '#8ea4ff'
  }
});


function MediaCard(props) {
  const { classes, media } = props;

  return (
    <ListItem>
      <ListItemText
        primaryTypographyProps={
          {
            variant: 'h6',
            gutterBottom: false,
            className: classes.titleText
          }
        }
        primary={media.name}
        secondaryTypographyProps={
          {
            variant: 'subtitle1',
            gutterBottom: false,
            className: classes.typeText
          }
        }
        secondary={media.type}
      />
    </ListItem>
  );
}

export default withStyles(styles)(MediaCard);
