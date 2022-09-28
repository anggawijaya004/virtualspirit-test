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

export const getPosts = () => {
  return {
    type: GET_POSTS,
  };
};

export const getPostsSuccess = (posts) => {
  return {
    type: GET_POSTS_SUCCESS,
    payload: posts,
  };
};

export const getPostsFail = (error) => {
  return {
    type: GET_POSTS_FAIL,
    payload: error,
  };
};

export const getPostEdit = (id, input, navigate) => {
  return {
    type: GET_POST_EDIT,
    payload: { id, input, navigate },
  };
};

export const getPostEditSuccess = (post, navigate) => {
  navigate("/");
  return {
    type: GET_POST_EDIT_SUCCESS,
    payload: post,
  };
};

export const getPostEditFail = (error) => {
  return {
    type: GET_POST_EDIT_FAIL,
    payload: error,
  };
};

export const getPostDelete = (id) => {
  return {
    type: GET_POST_DELETE,
    payload: id,
  };
};

export const getPostDeleteSuccess = (id) => {
  return {
    type: GET_POST_DELETE_SUCCESS,
    payload: id,
  };
};

export const getPostDeleteFail = (error) => {
  return {
    type: GET_POST_DELETE_FAIL,
    payload: error,
  };
};

export const getPostAdd = (input, navigate) => {
  return {
    type: GET_POST_ADD,
    payload: { input, navigate },
  };
};

export const getPostAddSuccess = (post, navigate) => {
  navigate("/");
  return {
    type: GET_POST_ADD_SUCCESS,
    payload: post,
  };
};

export const getPostAddFail = (error) => {
  return {
    type: GET_POST_ADD_FAIL,
    payload: error,
  };
};
