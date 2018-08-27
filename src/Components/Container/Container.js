import React, { Component } from 'react';
import './Container.css';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// components & contain data & link to pages

export class Container extends Component {
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
      CssClass: ''
    };
    return <div {...this.props}>{this.props.children}</div>;
  }
}
Container.defaultProps = {
  className: 'container'
};
export default Container;
