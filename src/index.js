import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom';

import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';


ReactDOM.render(
    <Router>
      <Provider store={store}>
      <App />
      </Provider>
    </Router>,
    document.getElementById('root') 
  )
