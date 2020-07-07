import React from 'react'
// about page style
import "./style.css"
import API from "../../utils/API"

import { Card, CardActions, CardContent, Button, Typography, CardActionArea, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export default function ProductsPage() {
    const classes = useStyles();
    return (
 <div className="productCards">
   {/* card 1 */}
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://place-hold.it/300"
          title="place holder image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Cupper Tube
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           It is a good tube
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
         brand
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          $100 ۱۰۰۰۰ تومان
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
       
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
{/* card 2 */}
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://place-hold.it/300"
          title="place holder image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Cupper Tube
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           It is a good tube
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
         brand
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          $100 ۱۰۰۰۰ تومان
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
       
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
{/* card 3 */}
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://place-hold.it/300"
          title="place holder image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Cupper Tube
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           It is a good tube
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
         brand
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          $100 ۱۰۰۰۰ تومان
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
       
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
{/* card 4 */}
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://place-hold.it/300"
          title="place holder image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Cupper Tube
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           It is a good tube
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
         brand
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          $100 ۱۰۰۰۰ تومان
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
       
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
{/* card 5 */}
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://place-hold.it/300"
          title="place holder image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Cupper Tube
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           It is a good tube
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
         brand
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          $100 ۱۰۰۰۰ تومان
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
       
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
 </div>

        )
    }

    