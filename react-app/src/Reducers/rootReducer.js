import {combineReducers} from "redux";
import {todoReducer} from "./todoReducer";
import {countReducer} from "./countReducer";

export default combineReducers({
    todos: todoReducer,
    count: countReducer
})
