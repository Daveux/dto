import {fetchData} from "../../utils/axios/fetch-data";
import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import blogTileImage from "../teaching/assets/volunteer-header-bg-2000.jpg"
import {reduceWords} from "../../utils/helpers/reduce-words";
import {useNavigate} from "react-router-dom";
const ContentCardComponent = (props:any) => {
  let navigate = useNavigate()
  return (
    <div>
      <Card sx={{ maxWidth: 500 }} style={{marginRight: 50}} onClick={()=> navigate(props.navigateTo)}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              // image={props.item.image}
              image={blogTileImage}
            />
            <CardContent>
              <Typography gutterBottom variant="h3" component="div">
                {props.item.title}
              </Typography>
              <Typography variant="inherit" color="text.secondary">
                {reduceWords(props.item.body, 20)}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="large">Share</Button>
              <Button size="large">Learn More</Button>
            </CardActions>
          </Card>
    </div>
  );
}
export  default ContentCardComponent;
