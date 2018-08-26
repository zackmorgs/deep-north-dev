import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
  render () {
    return <h1 className={this.props.className}>{this.props.chldren}</h1>;
  }
}

export default Title;
