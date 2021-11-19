import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Grid, Paper, CardMedia , Button } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const Comments = () => {
    // const dispatch = useDispatch();
    // const messages = useSelector(state => state.posts.messages);

    // useEffect(() => {
    //     setInterval(() => {
    //         dispatch(fetchMessages(match.params.id));
    //       }, 1000);
    // }, [dispatch, match.params.id]]); 

    return messages && (
        <Grid container justifyContent='center' mt={3}>
            <Grid item container justifyContent="space-around" alignItems="center" mb={4}>
                <Grid item>
                    <Typography variant="h4">Messages</Typography>
                </Grid>
            </Grid>
            <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
                <List
                    aria-label="contacts"
                    sx={{ minWidth: 480 }}
                >
                    <Grid sx={{ bgcolor: '#e8e8e8', justifyContent: 'center', margin: '1rem' }}>
                        <ListItem disablePadding>
                            <ListItemText inset primary={messages.messages}/>
                            </ListItem>
                    </Grid>
                </List>
            </Grid>
        </Grid>
    )
}

export default Comments
