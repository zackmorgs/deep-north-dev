import React from 'react';
import './CallToAction.css';


// import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from 'constants';

var CallToAction = (props) => (
  <div className="cta" {...props}>{props.children}</div>
);

export default CallToAction;
