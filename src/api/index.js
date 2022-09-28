import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/";

export const getPosts = async () => {
  try {
    const res = await axios(`${url}posts`);
    return res.data;
  } catch (error) {
    const err = error;
    return err;
  }
};

export const addPost = async (input) => {
  try {
    const res = await axios.post(`${url}posts`, input);
    return res.data;
  } catch (error) {
    const err = error;
    return err;
  }
};

export const editPost = async (id, input) => {
  try {
    const res = await axios.patch(`${url}posts/${id}`, input);
    return res.data;
  } catch (error) {
    const err = error;
    return err;
  }
};

export const deletePost = async (id) => {
  try {
    const res = await axios.delete(`${url}posts/${id}`);
    return res.data;
  } catch (error) {
    const err = error;
    return err;
  }
};
