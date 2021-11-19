import axiosApi from "../../axiosApi";
import { toast } from "react-toastify";
import { historyPush } from "./historyActions";
import WarningIcon from '@mui/icons-material/Warning';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';

export const CREATE_POST_REQUEST = 'CREATE_POST_REQUEST';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE';

export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';

export const CREATE_COMMENTS_REQUEST = 'CREATE_COMMENTS_REQUEST';
export const CREATE_COMMENTS_SUCCESS = 'CREATE_COMMENTS_SUCCESS';
export const CREATE_COMMENTS_FAILURE = 'CREATE_COMMENTS_FAILURE';

export const fetchPostsRequest = () => ({ type: FETCH_POSTS_REQUEST });
export const fetchPostsSuccess = posts => ({ type: FETCH_POSTS_SUCCESS, payload: posts });
export const fetchPostsFailure = () => ({ type: FETCH_POSTS_FAILURE });

export const fetchPostRequest = () => ({ type: FETCH_POST_REQUEST });
export const fetchPostSuccess = post => ({ type: FETCH_POST_SUCCESS, payload: post });
export const fetchPostFailure = () => ({ type: FETCH_POST_FAILURE });

export const createPostRequest = () => ({ type: CREATE_POST_REQUEST });
export const createPostSuccess = () => ({ type: CREATE_POST_SUCCESS });
export const createPostFailure = () => ({ type: CREATE_POST_FAILURE });

export const fetchCommentsRequest = () => ({ type: FETCH_COMMENTS_REQUEST });
export const fetchCommentsSuccess = comments => ({ type: FETCH_COMMENTS_SUCCESS, payload: comments });
export const fetchCommentsFailure = () => ({ type: FETCH_COMMENTS_FAILURE });

export const createCommentsRequest = () => ({ type: CREATE_COMMENTS_REQUEST });
export const createCommentsSuccess = () => ({ type: CREATE_COMMENTS_SUCCESS });
export const createCommentsFailure = () => ({ type: CREATE_COMMENTS_FAILURE });

export const fetchPosts = () => {
    return async (dispatch, getState) => {
        try {
            const headers = {
                'Authorization': getState().users.user && getState().users.user.token
            };

            dispatch(fetchPostsRequest());
            const response = await axiosApi.get('/products', { headers });
            dispatch(fetchPostsSuccess(response.data));
        } catch (error) {
            dispatch(fetchPostsFailure());
            if (error.response.status === 401) {
                toast.warning('You need login!');
            } else {
                toast.error('Could not fetch products!', {
                    theme: 'colored',
                    icon: <WarningIcon />
                });
            }
        }
    };
};

export const fetchPost = id => {
    return async dispatch => {
        try {
            dispatch(fetchPostRequest());
            const response = await axiosApi.get('products/' + id);
            dispatch(fetchPostSuccess(response.data));
        } catch (e) {
            dispatch(fetchPostFailure());
        }
    };
};

export const createPost = postData => {
    return async (dispatch, getState) => {
        try {
            dispatch(createPostRequest());
            const token = getState().users.user.token;
            const config = { headers: { 'Authorization': token } };
            await axiosApi.post('/posts', postData, config);
            dispatch(createPostSuccess());
            toast.success('Post created');
            dispatch(historyPush('/'));
        } catch (e) {
            dispatch(createPostFailure());
            throw e;
        }
    };
};

export const fetchComments = (postId) => {
    return async dispatch => {
        try {
            dispatch(fetchCommentsRequest());
            const response = await axiosApi.get('/comments?id=' + postId);
            dispatch(fetchCommentsSuccess(response.data));
        } catch (e) {
            dispatch(fetchCommentsFailure());
        }
    };
};

export const createComment = commentData => {
    return async (dispatch, getState) => {
        try {
            dispatch(createCommentsRequest())
            const token = getState().users.user.token;
            const config = { headers: { 'Authorization': token } };
            await axiosApi.post('/comments', commentData, config)
            dispatch(createCommentsSuccess())
        } catch (e) {
            dispatch(createCommentsFailure());
            throw e;
        }
    };
};