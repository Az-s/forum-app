import React , {useEffect} from 'react';
import { Grid, Card, CardMedia, CardHeader, CardContent, Typography, } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import {fetchPost} from '../../store/actions/postsActions';
import Comments from '../../components/Comments/Comments';
import CommentsForm from '../../components/CommentsForm/CommentsForm';

const Post = ({match}) => {
    const dispatch = useDispatch();
    const post = useSelector(state => state.posts.post);
  
    useEffect(() => {
      dispatch(fetchPost(match.params.id));
    }, [dispatch, match.params.id]);

    return post && (
        <Grid container justifyContent='center'>
            <Card sx={{ minWidth: 1000, margin: '1rem' }}>
                <CardHeader
                    title={post.title}
                    subheader={post.datetime}
                    subheader={post.user}
                />
                <CardMedia
                    component="img"
                    height="300"
                    image={post.image}
                    alt="album"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" >
                        {post.description}
                    </Typography>
                </CardContent>
                <Comments />
                <CommentsForm />
            </Card>
        </Grid>
    )
}

export default Post;
