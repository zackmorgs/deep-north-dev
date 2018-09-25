import React from 'react';

import './Frame.css';

// i made this cause react-router shouted at me and told me to return one component to it so fine there ya go.
let Frame = props => {
  return <div {...props}>{props.children}</div>;
};
Frame.defaultProps = {
  className: 'frame'
};

export default Frame;