import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import rootReducer from './redux/reducers/rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import {hasWrongWordsError} from "./redux/actions/wrongWordsAction";
import {ADD_ASYNC_TODO_SUCCESS} from "./redux/types/todoTypes";
import thunk from 'redux-thunk';

// const loggerMiddleware = store => next => action => {
//     console.group(action.type);
//     console.info('dispatching', action);
//     console.groupEnd();
//
//     return next(action);
// };

const catchWrongWords = ({ dispatch }) => next => action => {
    if(action.type === ADD_ASYNC_TODO_SUCCESS) {
        const wrongWords = ['fuck', 'nigger', 'bitch'];
        const currentInputData = action.payload.title;
        const isNotValidText = wrongWords.filter(word => currentInputData.includes(word)).length > 0

        if(!isNotValidText) {
            dispatch(hasWrongWordsError(false))
            next(action);
        }else {
            dispatch(hasWrongWordsError(true))
        }
    } else {
        next(action)
    }
}

const store = configureStore(
{
    reducer: rootReducer,
    middleware: [thunk, catchWrongWords]
})

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);
