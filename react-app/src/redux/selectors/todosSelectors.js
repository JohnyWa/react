import { createSelector } from 'reselect';

export const getTodos = state => state.todos.myTodos
export const getWrongWordsStatus = state => state.todos.hasWrongWords
export const getLoadingStatus = state => state.todos.loading

export const getPairIdTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => todo.id%2 === 0)
)

export const getTodoByID = createSelector(
    getTodos,
    (state, id) => id,
    (todos, id) => todos.find(todo => todo.id === id)
)
