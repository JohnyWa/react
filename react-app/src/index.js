import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {AlertProvider} from "./components/Alert/AlertContext";


ReactDOM.render(
      <BrowserRouter>
          <AlertProvider>
            <App />
          </AlertProvider>
      </BrowserRouter>,
  document.getElementById('root')
);

