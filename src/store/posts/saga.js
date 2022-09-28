import { takeLatest, put, call } from "redux-saga/effects";

import {
  GET_POSTS,
  GET_POST_ADD,
  GET_POST_DELETE,
  GET_POST_EDIT,
} from "./type";

import {
  getPostsSuccess,
  getPostsFail,
  getPostAddFail,
  getPostAddSuccess,
  getPostDeleteFail,
  getPostDeleteSuccess,
  getPostEditFail,
  getPostEditSuccess,
} from "./action";

import { addPost, deletePost, editPost, getPosts } from "../../api/index";

function* onGetPosts() {
  try {
    const response = yield call(getPosts);
    console.log(response, "rrr");
    yield put(getPostsSuccess(response));
  } catch (error) {
    yield put(getPostsFail(error.response));
  }
}

function* onAddPosts({ payload: { input, navigate } }) {
  try {
    const response = yield call(addPost, input);
    yield put(getPostAddSuccess(response, navigate));
  } catch (error) {
    yield put(getPostAddFail(error.response));
  }
}

function* onEditPosts({ payload: { id, input, navigate } }) {
  try {
    const response = yield call(editPost, id, input);
    yield put(getPostEditSuccess(response, navigate));
  } catch (error) {
    yield put(getPostEditFail(error.response));
  }
}

function* onDeletePosts({ payload: id }) {
  try {
    const response = yield call(deletePost, id);
    yield put(getPostDeleteSuccess(id));
  } catch (error) {
    yield put(getPostDeleteFail(error.response));
  }
}

function* CartSaga() {
  yield takeLatest(GET_POSTS, onGetPosts);
  yield takeLatest(GET_POST_ADD, onAddPosts);
  yield takeLatest(GET_POST_EDIT, onEditPosts);
  yield takeLatest(GET_POST_DELETE, onDeletePosts);
}

export default CartSaga;
