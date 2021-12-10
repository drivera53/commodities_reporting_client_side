// React
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import CSS
import './index.css';

// Redux - Thunk
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

// Importing Reducers
import { combineReducers } from 'redux'
import exchangesReducer from './reducers/exchangesReducer'
import usersReducer from './reducers/usersReducer'

import reportWebVitals from './reportWebVitals';

const rootReducer = combineReducers({
  user: usersReducer,
  exchange: exchangesReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
