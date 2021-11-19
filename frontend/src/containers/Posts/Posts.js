import React from 'react';
import { Box, Typography, Grid, Toolbar, Card, CardMedia, CardContent, Button , CardActions } from '@mui/material';
import { Link } from "react-router-dom";

const Posts = () => {
    return (
        <Grid container>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                <Card sx={{ maxWidth: 300, margin: '1rem' }} >
                    <CardMedia
                        component="img"
                        height="200"
                        image='https://images.pexels.com/photos/441963/pexels-photo-441963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                        alt="executor"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            MacBook
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            80 000 som
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <Button size="small" variant="outlined" component={Link} to='/post/:id'>More info</Button>
                    </CardActions>
                </Card>
            </Box>
        </Grid>
    )
}

export default Posts;
