import { createReducer } from '@reduxjs/toolkit';
import {
    addAsyncTodoSuccess,
    deleteAsyncTodoSuccess, getAllAsyncTodosFinish,
    getAllAsyncTodosStart,
    getAllAsyncTodosSuccess,
    removeTodo
} from "../actions/todoActions";
import {hasWrongWordsError} from "../actions/wrongWordsAction";

const initialProps = {
    myTodos: [],
    hasWrongWords: false,
    loading: false
}

export const todoReducer = createReducer(initialProps, {
    [addAsyncTodoSuccess.type]: (state, action) => ({
        ...state,
        myTodos: [...state.myTodos, action.payload]
    }),
    [deleteAsyncTodoSuccess.type]: (state, action) => ({
        ...state,
        myTodos: state.myTodos.filter(todo => todo.id !== action.payload)
    }),
    [hasWrongWordsError.type]: (state, action) => ({
        ...state,
        hasWrongWords: action.payload
    }),
    [getAllAsyncTodosSuccess.type]: (state, action) => ({
        ...state,
        myTodos: action.payload
    }),
    [getAllAsyncTodosStart.type]: (state, action) => ({
        ...state,
        loading: true
    }),
    [getAllAsyncTodosFinish.type]: (state, action) => ({
        ...state,
        loading: false
    })
})
