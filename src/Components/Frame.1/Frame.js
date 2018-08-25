import React, { Component } from 'react';
import './Frame.css';

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
    let Container = {
      CssClass: 'frame'
    };

    this.state.isLoaded
      ? (Container.CssClass += ' is-loaded')
      : console.log('loading');

    return <div classsName={Container.CssClass}>{this.props.children}</div>;
  }
}

export default Frame;
