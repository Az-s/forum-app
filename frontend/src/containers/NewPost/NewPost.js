import React from 'react';
import { useDispatch } from "react-redux";
import { createPost } from '../../store/actions/postsActions';
import Typography from '@mui/material/Typography';
import PostForum from '../../components/PostForm/PostForum';

const NewPost = ({ history }) => {
    const dispatch = useDispatch();

    const onSubmit = async postData => {
        await dispatch(createPost(postData));
        history.replace('/');
    };

    return (
        <>
            <Typography variant="h4" sx={{ margin: '1rem 0' }}>New post</Typography>
            <PostForum
                onSubmit={onSubmit}
            />
        </>
    )
}

export default NewPost;
