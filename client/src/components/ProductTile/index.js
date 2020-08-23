import React from "react";
import { Card, CardActions, CardContent, Typography, CardActionArea, CardMedia } from '@material-ui/core';
import placeholder from "../../assets/images/placeholder.svg"
import "./style.css";

export default function ProductTile(props) {
    return (
        <div className="ProductTile">
            <Card>
                <CardActionArea onClick={() => props.handleClick(props)}>
                    <CardMedia
                        className="media"
                        image={props.image ? props.image : placeholder}
                        title={props.image ? `${props.name} by ${props.brand}` : "placeholder image"}
                        
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">{props.name}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{props.brand}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{props.price} ۱۰۰۰۰ تومان</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{props.quantity > 0 ? "In Stock" : "Not Available"}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}