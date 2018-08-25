import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/global.css';
import Home from './Pages/Home/Home';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Site from './Site/Site';

ReactDOM.render(
  <Site />,
  document.getElementById('root')
);

registerServiceWorker();
