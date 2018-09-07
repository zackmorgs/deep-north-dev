import React, { Component } from 'react';
// import Header from './../../Type/Header';

import './Page.css';

export class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
    //console.log(this.props.className);
  }
  componentDidMount() {
    console.log('Page : componentDidMount() Mounted');
    this.setState({
      isLoaded: true
    });
    
  }
  componentWillMount() {
    console.log('Page : componentWillMount() : Mounting');
  }
  componentWillUpdate() {
    console.log(
      'Page : componentWillUpdate()',
      document.querySelector('.page').className
    );
  }
  componentDidUpdate() {
    console.log('Page : componentDidUpdate().');
  }

  componentWillUnmount() {
    console.log('Page : componentWillUnmount()');
  }

  render() {
    // console.log('Page : render()');
    return <div {...this.props}>{this.props.children}</div>;
  }
}
Page.defaultProps = {
  className: 'page page-loading'
};
export default Page;
