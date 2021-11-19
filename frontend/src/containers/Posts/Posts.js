import React, { useEffect } from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button, CardActions } from '@mui/material';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from '../../store/actions/postsActions';
import Spinner from '../../components/UI/Spinner/Spinner';

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);
    const fetchLoading = useSelector(state => state.posts.fetchLoading);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <Grid container>
            <Grid item container direction="row" spacing={1}>
                {fetchLoading ? (
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item>
                            <Spinner />
                        </Grid>
                    </Grid>
                ) : posts.map(post => (
                    <Card sx={{ display: 'flex', margin: '1rem' }} key={post.id}>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image={post.image ? post.image : 'https://thumbs.dreamstime.com/b/chat-icon-vector-isolated-white-background-sign-linear-symbol-stroke-design-elements-outline-style-transparent-134064048.jpg'}
                            alt="image"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {post.datetime} {' '} {post.user}
                                </Typography>
                                <Typography component="div" variant="h5">
                                    {post.title}
                                </Typography>
                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <Button size="small" variant="outlined" component={Link} to='/post/:id'>More &#10145;</Button>
                                </CardActions>
                            </CardContent>
                        </Box>
                    </Card>
                ))}
            </Grid>
        </Grid>
    )
}

export default Posts;
