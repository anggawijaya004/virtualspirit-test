import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  GET_POST_ADD,
  GET_POST_ADD_SUCCESS,
  GET_POST_ADD_FAIL,
  GET_POST_EDIT,
  GET_POST_EDIT_SUCCESS,
  GET_POST_EDIT_FAIL,
  GET_POST_DELETE,
  GET_POST_DELETE_SUCCESS,
  GET_POST_DELETE_FAIL,
} from "./type";

const initialState = {
  posts: null,
  loadingPosts: false,
  loadingPostDelete: false,
  error: {
    message: "",
  },
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      state = { ...state, loadingPosts: true };
      break;
    case GET_POSTS_SUCCESS:
      state = { ...state, posts: action.payload, loadingPosts: false };
      break;
    case GET_POSTS_FAIL:
      state = {
        ...state,
        error: {
          message: "Error",
        },
        loadingPosts: false,
      };
      break;
    case GET_POST_ADD:
      state = { ...state, loadingPosts: true };
      break;
    case GET_POST_ADD_SUCCESS:
      state = {
        ...state,
        posts: [action.payload, ...state.posts],
        loadingPosts: false,
      };
      break;
    case GET_POST_ADD_FAIL:
      state = {
        ...state,
        error: {
          message: "Error",
        },
        loadingPosts: false,
      };
      break;
    case GET_POST_EDIT:
      state = { ...state, loadingPosts: true };
      break;
    case GET_POST_EDIT_SUCCESS:
      let temp = state.posts.map((e) =>
        e.id === action.payload.id ? action.payload : e
      );
      state = {
        ...state,
        posts: temp,
        loadingPosts: false,
      };
      break;
    case GET_POST_EDIT_FAIL:
      state = {
        ...state,
        error: {
          message: "Error",
        },
        loadingPosts: false,
      };
      break;
    case GET_POST_DELETE:
      state = { ...state, loadingPostDelete: true };
      break;
    case GET_POST_DELETE_SUCCESS:
      let tempDel = state.posts.filter((e) => e.id != action.payload);
      state = {
        ...state,
        posts: tempDel,
        loadingPostDelete: false,
      };
      break;
    case GET_POST_DELETE_FAIL:
      state = {
        ...state,
        error: {
          message: "Error",
        },
        loadingPostDelete: false,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default PostReducer;
