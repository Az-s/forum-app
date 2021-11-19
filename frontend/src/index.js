import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from "react-router-dom";
import {Provider} from "react-redux";
import {ToastContainer} from "react-toastify";
import { ThemeProvider } from '@mui/material/styles';
import store from "./store/configureStore";
import history from "./history";
import theme from "./theme";
import App from './App';
import './index.css';

const app = (
  <Provider store={store}>
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <ToastContainer/>
        <App/>
      </ThemeProvider>
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
