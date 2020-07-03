import React from 'react'
// about page style
import "./style.css"
import API from "../../utils/API"


// --start of import for card
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';

// --end of import for card

// -----for card style
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
// -----end of card style


export default function SplashPage() {

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      {/* sales */}
      <Card className={classes.root}>
        <CardContent>

        <Typography variant="h5" component="h2">
           Sales فروشگاه
        </Typography>

        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>


      {/* service */}
      <Card className={classes.root}>
        <CardContent>
        
          <Typography variant="h5" component="h2">
           Service تعمیرگاه
        </Typography>
        

        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>

  )
}