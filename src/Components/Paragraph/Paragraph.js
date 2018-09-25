import React from 'react';

import './Paragraph.css';

let Paragraph = props => {
  return (
    <p {...props}>
      {props.children}
    </p>
  )
}

export default Paragraph;