import axios from "axios";
import { getTodoError, getTodoSuccess, loading, patchTodoSuccess } from "../actions";
const getTodo = `https://944ba3c5-94c3-4369-a9e6-a509d65912e2.mock.pstmn.io/get`
const patchTodo = `https://944ba3c5-94c3-4369-a9e6-a509d65912e2.mock.pstmn.io/patch/`
const header = {
    'X-Api-Key': 'PMAK-5ef63db179d23c004de50751-10300736bc550d2a891dc4355aab8d7a5c',
    'Content-Type': 'application/json'
}
export const callGetTodos = () => {
    return (dispatch) => {     //nameless functions
        // Initial action dispatched
        dispatch(loading());

        // Return promise with success and failure actions
        return axios.get(getTodo, {
            headers: header
        }).then(
            data => dispatch(getTodoSuccess(data)),
            err => dispatch(getTodoError(err))
        );
    };
};
export const patchTodos = (todo) => {
    return (dispatch) => {     //nameless functions
        // Initial action dispatched
        dispatch(loading());

        // Return promise with success and failure actions
        return axios.patch(patchTodo + todo.id, {
            "isComplete": true
        }, {
            headers: header
        }).then(
            data => dispatch(patchTodoSuccess(todo)),
            err => dispatch(getTodoError(err))
        );
    };
};