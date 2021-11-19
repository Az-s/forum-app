import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAILURE,
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAILURE,
} from '../actions/postsActions';

const initialState = {
    fetchLoading: false,
    singleLoading: false,
    posts: [],
    post: null,
    comments: [],
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return { ...state, fetchLoading: true };
        case FETCH_POSTS_SUCCESS:
            return { ...state, fetchLoading: false, posts: action.payload };
        case FETCH_POSTS_FAILURE:
            return { ...state, fetchLoading: false };
        case FETCH_POST_REQUEST:
            return { ...state, singleLoading: true };
        case FETCH_POST_SUCCESS:
            return { ...state, singleLoading: false, post: action.payload };
        case FETCH_POST_FAILURE:
            return { ...state, singleLoading: false };
        case FETCH_COMMENTS_REQUEST:
            return { ...state, singleLoading: true };
        case FETCH_COMMENTS_SUCCESS:
            return { ...state, singleLoading: false, comments: action.payload };
        case FETCH_COMMENTS_FAILURE:
            return { ...state, singleLoading: false };
        default:
            return state;
    }
};

export default postsReducer;