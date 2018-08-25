import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './../Pages/Home/Home'

const Site = () => (
  <Router>
    <React.Fragment>
      <Home />

      <Route exact path="/" component={Home} />
      {/* <Route path="/about" component={About} /> */}
      {/* <Route path="/topics" component={Topics} /> */}
    </React.Fragment>
  </Router>
);



export default Site;