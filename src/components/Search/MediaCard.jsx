import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import testImage from '../../mock-data/default-thumb.png';

const styles = () => ({
  mediaCard: {
    width: 'inherit',
    height: '180px',
    'margin-bottom': '20px'
  },
  mediaPhoto: {
    margin: '15px',
    height: '150px',
    width: '150px',
    float: 'left'
  },
  titleText: {
    'font-weight': '50px',
    float: 'left',
    'font-family': 'Arial, Helvetica, sans-serif'
  },
  typeText: {
    'font-family': 'Arial, Helvetica, sans-serif',
    color: '#8ea4ff'
  },
  dateText: {
    'font-family': 'Arial, Helvetica, sans-serif',
    color: '#8ea4ff',
    padding: '5px',
    position: 'relative',
    left: '8px'
  }
});


function MediaCard(props) {
  const { classes, media } = props;

  return (
    <Card className={classes.mediaCard}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="140"
        image={testImage}
        className={classes.mediaPhoto}
      />
      <CardContent>
        <Typography component="h5" variant="h5" className={classes.titleText}>
          {media.name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" className={classes.dateText}>
          {media.releaseDate}
        </Typography>
        <Typography color="textSecondary" className={classes.typeText}>
          {media.type}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(MediaCard);
