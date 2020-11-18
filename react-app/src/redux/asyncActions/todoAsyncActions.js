import axios from 'axios';
import {
    addAsyncTodoFailure,
    addAsyncTodoStart,
    addAsyncTodoSuccess, deleteAsyncTodoFailure, deleteAsyncTodoStart, deleteAsyncTodoSuccess,
    getAllAsyncTodosFailure, getAllAsyncTodosFinish,
    getAllAsyncTodosStart,
    getAllAsyncTodosSuccess
} from "../actions/todoActions";

export const addAsyncTodo = title => dispatch => {
    dispatch(addAsyncTodoStart())

    axios.post(' http://localhost:9000/todos', { title })
        .then(response => dispatch(addAsyncTodoSuccess(response.data)))
        .catch(error => dispatch(addAsyncTodoFailure(error)))
}

export const getAllTodos = () => dispatch => {
    dispatch(getAllAsyncTodosStart())

    axios.get(' http://localhost:9000/todos')
        .then(response => {
            dispatch(getAllAsyncTodosSuccess(response.data))
        })
        .catch(error => dispatch(getAllAsyncTodosFailure(error)))
        .finally(() => dispatch(getAllAsyncTodosFinish()))
}

export const removeTodoByID = id => dispatch => {
    dispatch(deleteAsyncTodoStart())
    axios.delete(` http://localhost:9000/todos/${id}/`)
        .then(response => dispatch(deleteAsyncTodoSuccess(id)))
        .catch(error => dispatch(deleteAsyncTodoFailure(error)))

}

