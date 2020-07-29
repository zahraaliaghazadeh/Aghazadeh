import React from "react";
import { Card, CardActions, CardContent, Typography, CardActionArea, CardMedia } from '@material-ui/core';
import "./style.css";

export default function ProductTile(props) {
    return (
        <div className="ProductTile">
            <Card>
                <CardActionArea>
                    <CardMedia
                        className="media"
                        // C/O https://placeholder.com/
                        image={props.image ? props.image : "https://via.placeholder.com/150"}
                        title={props.image ? `${props.name} by ${props.brand}` : "place holder image"}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">{props.name}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{props.brand}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{props.price} ۱۰۰۰۰ تومان</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}