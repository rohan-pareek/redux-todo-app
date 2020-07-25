import { ADD_TODO, DELETE_TODO, FETCH_TODO, COMPLETE_TODO } from "../actionTypes";

export const addTodo = (todo) => {
    return (dispatch) => {
        dispatch({
            type: ADD_TODO,
            payload: todo
        })
    }
}

export const deleteTodo = (id) => {
    return async (dispatch) => {
        dispatch({
            type: DELETE_TODO,
            payload: id
        })
    }
}

export const fetchTodo = () => {
    return (dispatch) => {
        dispatch({
            type: FETCH_TODO
        })
    }
}

export const completeTodo = (id) => {
    return (dispatch) => {
        dispatch({
            type: COMPLETE_TODO,
            payload: id
        })
    }
}