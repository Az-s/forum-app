import React from 'react';
import { Grid, Card, CardMedia, CardHeader, CardContent, Typography, } from '@mui/material';
import Comments from '../../components/Comments/Comments';

const Post = ({match}) => {


    return (
        <Grid container justifyContent='center'>
            <Card sx={{ minWidth: 1000, margin: '1rem' }}>
                <CardHeader
                    title="MacBook"
                    subheader="2021.11.11 by John Doe"
                />
                <CardMedia
                    component="img"
                    height="300"
                    image='https://images.pexels.com/photos/441963/pexels-photo-441963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                    alt="album"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" >
                        Description about product
                    </Typography>
                </CardContent>
                <Comments />
            </Card>
        </Grid>
    )
}

export default Post;
