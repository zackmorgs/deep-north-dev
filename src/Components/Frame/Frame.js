import React, { Component } from 'react';
import './Frame.css';

export class Frame extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isLoaded: false
    };
  }
  componentDidMount () {
    this.setState({
      isLoaded: true
    });
  }
  render () {
    let Element = {
      cssClass: 'frame'
    };

    this.state.isLoaded
      ? (Element.cssClass += ' is-loaded')
      : console.log('loading');

    return <div className={Element.cssClass}>{this.props.children}</div>;
  }
}

export default Frame;
