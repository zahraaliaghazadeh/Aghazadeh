import React from 'react'
// about page style
import "./style.css"
import API from "../../utils/API"


// --start of import for card
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';

// --end of import for card


import refrigerator1 from '../../assets/images/refrigerator1.jpg'


// -----for card style
const useStyles = makeStyles({
  root: {
    minWidth: 275,
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

  return (
    <div className="splashCards">

      <img src={refrigerator1} alt="refrigerator1" className="refrigerator1"/>


      {/* sales */}
      <Card id="salesCard" className={classes.root}>
        <CardContent>

        <Typography variant="h5" component="h2">
           Sales فروشگاه
        </Typography>

        </CardContent>
        <CardActions>
          {/* <Button size="small">Learn More</Button> */}
        </CardActions>
      </Card>


      {/* service */}
      <Card id="serviceCard" className={classes.root}>
        <CardContent>
        
          <Typography variant="h5" component="h2">
           Service تعمیرگاه
        </Typography>
        <li><a href="/request">Request<br></br>
 درخواست</a></li>

        </CardContent>
        <CardActions>
          {/* <Button size="small">Learn More</Button> */}
        </CardActions>
      </Card>
    </div>

  )
}