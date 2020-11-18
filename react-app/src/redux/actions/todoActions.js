import {
    ADD_ASYNC_TODO_FAILURE,
    ADD_ASYNC_TODO_START,
    ADD_ASYNC_TODO_SUCCESS,
    DELETE_ASYNC_TODO_FAILURE,
    DELETE_ASYNC_TODO_START,
    DELETE_ASYNC_TODO_SUCCESS,
    GET_ASYNC_ALL_TODOS_FAILURE, GET_ASYNC_ALL_TODOS_FINISH,
    GET_ASYNC_ALL_TODOS_START,
    GET_ASYNC_ALL_TODOS_SUCCESS,
    REMOVE_TODO
} from "../types/todoTypes";
import {createAction} from '@reduxjs/toolkit'

export const removeTodo = createAction(REMOVE_TODO);


export const addAsyncTodoStart = createAction(ADD_ASYNC_TODO_START)
export const addAsyncTodoSuccess = createAction(ADD_ASYNC_TODO_SUCCESS)
export const addAsyncTodoFailure = createAction(ADD_ASYNC_TODO_FAILURE)

export const getAllAsyncTodosStart = createAction(GET_ASYNC_ALL_TODOS_START)
export const getAllAsyncTodosFinish = createAction(GET_ASYNC_ALL_TODOS_FINISH)
export const getAllAsyncTodosSuccess = createAction(GET_ASYNC_ALL_TODOS_SUCCESS)
export const getAllAsyncTodosFailure = createAction(GET_ASYNC_ALL_TODOS_FAILURE)

export const deleteAsyncTodoStart = createAction(DELETE_ASYNC_TODO_START)
export const deleteAsyncTodoSuccess = createAction(DELETE_ASYNC_TODO_SUCCESS)
export const deleteAsyncTodoFailure = createAction(DELETE_ASYNC_TODO_FAILURE)

