import React , {useEffect} from 'react';
import Typography from '@mui/material/Typography';
import PostForum from '../../components/PostForm/PostForum';

const NewPost = () => {
    return (
        <>
        <Typography variant="h4" sx={{ margin: '1rem 0' }}>New product</Typography>
        <PostForum
            // onSubmit={onSubmit}
            // categories={categories}
        />
    </>
    )
}

export default NewPost;
