import React, { Component } from 'react';
import './Subtitle';

class Subtitle extends Component {
  render() {
    return (
      <span className='subtitle'>
        {this.props.chldren}
      </span>
    );
  }
}

export default Subtitle;