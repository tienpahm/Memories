import * as api from "../api";
import {
  FETCH_ALL,
  CREATE,
  DELETE,
  UPDATE,
  LIKE,
} from "../constants/actionTypes";

//Action Creators

export const getPosts = () => async (dispatch) => {
  try {
    const {data} = await api.fetchPosts();
    const action = {type: FETCH_ALL, payload: data};
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const {data} = await api.createPost(post);
    const action = {type: CREATE, payload: data};
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
export const updatePost = (id, updatePost) => async (dispatch) => {
  try {
    const {data} = await api.updatePost(id, updatePost);

    dispatch({type: UPDATE, payload: data});
  } catch (error) {
    console.log(error);
  }
};
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({type: DELETE, payload: id});
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const {data} = await api.likePost(id);
    console.log(data);
    dispatch({type: LIKE, payload: data});
  } catch (error) {
    console.log(error);
  }
};
