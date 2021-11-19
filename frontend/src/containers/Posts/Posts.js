import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button, CardActions } from '@mui/material';
import { Link } from "react-router-dom";

const Posts = () => {
    const img = "https://images.pexels.com/photos/441963/pexels-photo-441963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

    return (
        <Grid container>
            <Card sx={{ display: 'flex', margin: '1rem' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={img ? img : 'https://cdn-icons-png.flaticon.com/512/134/134914.png'}
                    // image={customer.photo ? customer.photo : 'https://mediscan.kz/images/user.png'}
                    alt="image"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            19.11.2021 18:30 John Doe
                        </Typography>
                        <Typography component="div" variant="h5">
                            Live From Space
                        </Typography>
                        <CardActions sx={{ justifyContent: 'center' }}>
                            <Button size="small" variant="outlined" component={Link} to='/post/:id'>More &#10145;</Button>
                        </CardActions>
                    </CardContent>
                </Box>
            </Card>
        </Grid>
    )
}

export default Posts;
