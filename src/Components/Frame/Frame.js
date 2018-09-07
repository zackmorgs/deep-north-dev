import React, { Component } from 'react';
import './Frame.css';

import Ruler from './Ruler';

export class Frame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false
    };
  }
  componentDidMount() {
    this.setState({
      isLoaded: true
    });
  }
  render() {
    return (
      <div className={'frame' + (this.state.isLoaded ? ' loaded' : ' loading')}>
        {this.props.children}
      </div>
    );
  }
}

export default Frame;
