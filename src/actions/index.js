import { CHECK_TODO, LOADING, GET_TODO_SUCCESS, GET_TODO_ERROR } from '../constants/action-types.js';

export const patchTodoSuccess = todo => ({
    type: CHECK_TODO,
    payload: todo
});

export const getTodoSuccess = (data) => ({
    type: GET_TODO_SUCCESS,
    payload: data
});
export const getTodoError = (error) => ({
    type: GET_TODO_ERROR,
    payload: error
});
export const loading = () => ({
    type: LOADING
});
