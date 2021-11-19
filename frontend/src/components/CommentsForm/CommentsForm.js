import React, { useState } from 'react';
import { Grid, Button, TextField } from '@mui/material';
import { useDispatch } from "react-redux";
import { createComment } from '../../store/actions/postsActions';

const CommentsForm = ({history}) => {
    const dispatch = useDispatch();

    const [state, setState] = useState({
        user: "",
        comment: "",
    });

    const onSubmit = async commentData => {
        await dispatch(createComment(commentData));
        history.replace('/');
    };

    const submitFormHandler = e => {
        e.preventDefault();

        const formData = new FormData();
        Object.keys(state).forEach(key => {
            formData.append(key, state[key]);
        });

        onSubmit(formData);
    };

    const inputChangeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        setState(prevState => {
            return { ...prevState, [name]: value };
        });
    };

    return (
        <Grid
            container
            direction="column"
            spacing={2}
            component="form"
            autoComplete="off"
            onSubmit={submitFormHandler}
            sx={{ padding: '1rem 4rem' }}
        >

            <Grid item xs>
                <TextField
                    required
                    fullWidth
                    variant="outlined"
                    label="User"
                    name="user"
                    type="text"
                    value={state.title}
                    onChange={inputChangeHandler}
                />
            </Grid>

            <Grid item xs>
                <TextField
                    required
                    fullWidth
                    multiline
                    rows={3}
                    variant="outlined"
                    label="Comment"
                    name="comment"
                    type="text"
                    value={state.description}
                    onChange={inputChangeHandler}
                />
            </Grid>

            <Grid item xs>
                <Button type="submit" color="primary" variant="contained">Create</Button>
            </Grid>
        </Grid>
    )
}

export default CommentsForm;
