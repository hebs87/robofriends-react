import React from 'react';
import ReactDOM from 'react-dom';
// Redux imports
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import './index.css';
import 'tachyons';
import App from "./containers/App";
import {searchRobots} from "./redux/reducers";
import * as serviceWorker from './serviceWorker';

// Create middleware logger - passed into createStore as second param
const logger = createLogger();
// Create store and pass into Provider - this is normally the root reducer
const store = createStore(searchRobots, applyMiddleware(logger));

// Wrap app in Provider to give it access to the store
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
