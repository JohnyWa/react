import { createReducer } from '@reduxjs/toolkit';
import {addMyTodo, addTodoWithCustomPayload, removeTodo} from "../actions/todoActions";

const initialProps = {
    myTodos: [],
    testData: []
}

export const todoReducer = createReducer(initialProps, {
    [addMyTodo.type]: (state, action) => ({
        ...state,
        myTodos: [...state.myTodos, action.payload]
    }),
    [removeTodo.type]: (state, action) => ({
        ...state,
        myTodos: state.myTodos.filter(todo => todo.id !== action.payload)
    }),
    [addTodoWithCustomPayload.type]: (state, action) => ({
        ...state,
        testData: [...state.testData, action.payload]
    })
})

// export const todoReducer = (state = initialProps, action) => {
//     switch (action.type) {
//         case ADD_TODO:
//             return {
//                 ...state,
//                 myTodos: [...state.myTodos, action.payload]
//             }
//         case REMOVE_TODO:
//             const filteredTodos = state.myTodos.filter(todo => todo.id !== action.payload)
//             return {
//                 ...state,
//                 myTodos: filteredTodos
//             }
//         case TEST_ADD_TODO_WITH_CUSTOM_PAYLOAD:
//             return {
//                 ...state,
//                 testData: [...state.testData, action.payload]
//             }
//         default:
//             return state
//     }
// }
