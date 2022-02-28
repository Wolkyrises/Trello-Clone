import { 
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography
} from '@mui/material';
import React from 'react';

const SpaceCard = (props) => {


  return <Card  sx={{ maxWidth: 345 , marginTop: 2}}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={props.imgUrl}
                alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>;
};

export default SpaceCard;
