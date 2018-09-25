import React from 'react';

import './Label.css';

let Label = props => {
  return (
    <label {...props}>
      {props.children}
    </label>
  );
};

export default Label;