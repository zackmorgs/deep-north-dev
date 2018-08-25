import React, { Component } from 'react';
import './Container.css';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// components & contain data & link to pages
// import Container from './../Components/Container/Container';

export class Container extends Component {
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
    let Element = {
      CssClass: 'container'
    };

    // this.state.isLoaded ? Container.CssClass += 'is-loaded' : console.log('loading');

    return <div className={Element.CssClass}>{this.props.children}</div>;
  }
}

export default Container;
