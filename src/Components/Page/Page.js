import React, { Component } from 'react';
// import Header from './../../Type/Header';
import { Helmet } from "react-helmet";


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
    return (
      <React.Fragment>
        <Helmet>
          <title>{"Deep North Contracting | " + this.props.pageTitle}</title>
          <meta name="description" content={this.props.pageDescription} />
          <meta property="og:url" content={document.location.href}/>
          <meta property="og:title" content={"Deep North Contracting |" + this.props.pageTitle } />
          <meta property="og:description" content={this.props.pageDescription} />
          <meta property="og:image" content={this.props.facebookImage} />

        </Helmet>
        <div {...this.props}>{this.props.children}</div>
      </React.Fragment>
    )
  }
}
Page.defaultProps = {
  className: 'page page-loading',
  facebookImage: '/img/facebook/OpenGraph-Default.png'
};
export default Page;
