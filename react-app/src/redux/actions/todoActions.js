import {ADD_TODO, REMOVE_TODO, TEST_ADD_TODO_WITH_CUSTOM_PAYLOAD} from "../types/todoTypes";
import {createAction, nanoid} from '@reduxjs/toolkit'

export const addMyTodo = createAction(ADD_TODO);
export const removeTodo = createAction(REMOVE_TODO);


export const addTodoWithCustomPayload = createAction(TEST_ADD_TODO_WITH_CUSTOM_PAYLOAD, function prepare(text) {
    return {
        payload: {
            text,
            id: nanoid(),
            createdAt: new Date().toISOString(),
        },
    }
})
