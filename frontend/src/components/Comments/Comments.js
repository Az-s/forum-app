import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Grid, } from '@mui/material';
import { fetchComments } from '../../store/actions/postsActions';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const Comments = ({ match }) => {
    const dispatch = useDispatch();
    const comments = useSelector(state => state.posts.comments);

    useEffect(() => {
        setInterval(() => {
            dispatch(fetchComments(match.params.id));
        }, 1000);
    }, [dispatch, match.params.id]);

    return comments && (
        <Grid container justifyContent='center' mt={3}>
            <Grid item container justifyContent="space-around" alignItems="center" mb={4}>
                <Grid item>
                    <Typography variant="h4">Comments</Typography>
                </Grid>
            </Grid>
            <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
                <List
                    aria-label="contacts"
                    sx={{ minWidth: 480 }}
                >
                    <Grid sx={{ bgcolor: '#e8e8e8', justifyContent: 'center', margin: '1rem' }}>
                        <ListItem disablePadding>
                            <ListItemText inset primary={comments.user} />
                            <ListItemText inset primary={comments.comment} />
                        </ListItem>
                    </Grid>
                </List>
            </Grid>
        </Grid>
    )
}

export default Comments
