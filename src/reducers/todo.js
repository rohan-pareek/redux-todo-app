import { ADD_TODO, DELETE_TODO, FETCH_TODO, COMPLETE_TODO } from "../actionTypes";

export default (state = [], action) => {
    switch (action.type) {
        case ADD_TODO: {
            let todo = {
                title: action.payload,
                id: state.length + 1,
                isCompleted: false
            }
            state = [...state, todo];
            return state;
        }
        case DELETE_TODO: {
            state = [...state.filter(todo => todo.id !== action.payload)];
            return state;
        }
        case FETCH_TODO: {
            return state;
        }
        case COMPLETE_TODO: {
            return [...state.map(todo => {
                if(todo.id === action.payload) {
                    todo.isCompleted = !todo.isCompleted;
                }
                return todo;
            })];
            // return state;
        }
        default: {
            return state;
        }
    }
}
