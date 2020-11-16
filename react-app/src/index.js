import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import rootReducer from './redux/reducers/rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";

const store = configureStore(
{
    reducer: rootReducer,
})

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

