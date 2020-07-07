import React from 'react'
// about page style
import "./style.css"
import API from "../../utils/API"
import { makeStyles } from '@material-ui/core/styles';

import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';

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

export default function ServiceDeptPage() {
    const classes = useStyles();

    return (
        <div className="contactCards">
            {/* card 1 Service Dept Contact */}
            <Card id="serviceContact" className={classes.root}>
                <CardContent>

                    <Typography variant="h5" component="h2">
                        Service
        </Typography>

                    <h1>آدرس تعمیرگاه</h1>
                    <h2>Service Department</h2>
                    <p>
                        آدرس:کرج.خیابان برغان<br></br>.بین خیابان شهربانی و دکتر همایون.روبروی هنرستان پهلوانی.تعمیرگاه مرکزی آقازاده

<br></br>address: No , Baraghan St, Karaj

<br></br>
شماره تماس:02632215718
32214735
         </p>

                </CardContent>

                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>

            {/* card 2 Sales Dept Contact */}

            <Card id="salesContact" className={classes.root}>
                <CardContent>

                    <Typography variant="h5" component="h2">
                        Sales
        </Typography>


                    <h1>آدرس فروشگاه</h1>
                    <h2>Sales Department</h2>

                    <p>



                        آدرس:کرج.خیابان برغان.خیابان دکتر همایون.فروشگاه مرکزی آقازاده
       <br></br> address: No , Dr.Homayoon St, Karaj

        <br></br>
         شماره تماس
         :02632215718
32214735
         </p>

                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>




        </div>

    )
}