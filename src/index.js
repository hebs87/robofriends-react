import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/Card';
import 'tachyons';
import robots from "./data/robots";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {
      robots &&
      robots.map(robot => (
        <Card key={robot.id} robot={robot}/>
      ))
    }
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
