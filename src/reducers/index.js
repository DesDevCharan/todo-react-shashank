import { CHECK_TODO, GET_TODO_ERROR, GET_TODO_SUCCESS, LOADING } from "../constants/action-types";

const initialState = {
    todos: [],
    loading: false
};

const arrSort = (arr) => {
    arr = arr.sort((a, b) => {
        var keyA = new Date(a.dueDate),
            keyB = new Date(b.dueDate);
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
    });
    const overdue = arr.sort(a => a.dueDate < new Date());
    const comp = overdue.filter(a => a.isCompleted);
    const pending = overdue.filter(a => !a.isCompleted);
    return pending.concat(comp);
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_TODO:
            return {
                ...state,
                todos: state.todos.map(el => {
                    if (el.id == action.payload.id) el.isCompleted = action.payload.value;
                    return el;
                }),
                loading:false
            };
        case LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_TODO_SUCCESS:
            return {
                ...state,
                todos: arrSort(action.payload.data),
                loading: false
            };
        case GET_TODO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.data
            };
        default:
            return state;
    }
};

export default rootReducer;
