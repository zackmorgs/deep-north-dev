import React, { Component } from 'react';
import './Body.css';

class Body extends Component {
  render() {
    return (
      <p className='text-body'>
        {this.props.children}
      </p>
    );
  }
}

export default Body;