import React from 'react';
import ReactDOM from 'react-dom';

// reset, typography. ill goldplate typography later. for now work must be done.
import './Styles/global.css';

import Home from './Pages/Home/Home';
import registerServiceWorker from './registerServiceWorker';

import Website from './Components/Website/Website';

// var typeset = require('typeset');
// missing jquery it says lol
// typeset(ReactDOM.render(<Website />, document.getElementById('root')));
ReactDOM.render(
  <Website />,
  document.getElementById('root')
);

registerServiceWorker();
