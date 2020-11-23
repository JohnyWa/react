import {combineReducers} from "redux";
import {todoReducer} from "./todoReducer";
import {countReducer} from "./addCountReducer";

export default combineReducers({
    todos: todoReducer,
    counter: countReducer
})
