import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import './ImageCarousel.css';

export class Slide extends Component {
  constructor (props) {
    super(props);
  }
  componentDidMount () {}
  render () {
    return (
      <div {...this.props} >
        {this.props.children}
      </div>
    );
  }
}

class ImageCarousel extends Component {
  // constructor (props) {
  //   super(props);
  //   // this.state = {
  //   //   hasWidth: true,
  //   //   shouldLoad: true
  //   // };
  // }

  // componentWillMount () {
  //   //console.log('ImageCarousel() : componentWillMount ()');
  // }

  // componentDidMount () {
  //   //console.log('ImageCarousel() : componentDidMount ()');

  // }

  // componentWillReceiveProps (nextProps) {
  //   //console.log('ImageCarousel() : componentWillReceiveProps ()');
  // }
  // // shouldComponentUpdate(nextProps, nextState) {}
  // componentWillUpdate (nextProps, nextState) {
  //   //console.log('ImageCarousel() : componentWillUpdate ()');
  // }
  // componentDidUpdate (prevProps, prevState) {
  //   //console.log('ImageCarousel() : componentDidUpdate ()');
  // }
  // componentWillUnmount() {}
  render () {
    // console.log('ImageCarousel() : render ()');

    return (
      <div {...this.props} >
        {this.props.children}
      </div>
    );
  }
}

export default ImageCarousel;
