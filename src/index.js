import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './Styles/global.css';
import Home from './Pages/Home/Home';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Website from './Website/Website';

// var typeset = require('typeset');
// missing jquery it says lol
// typeset(ReactDOM.render(<Website />, document.getElementById('root')));
ReactDOM.render(<Website />, document.getElementById('root'));

registerServiceWorker();
