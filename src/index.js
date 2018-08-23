import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/global.css';
import Home from './Pages/Home/Home';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
