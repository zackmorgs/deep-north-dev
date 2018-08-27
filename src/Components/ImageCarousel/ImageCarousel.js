import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ImageCarousel.css';

export class ImageCarousel extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }

  componentWillMount () {

  }
  componentDidMount () {

  }
  componentWillReceiveProps (nextProps) {

  }

  shouldComponentUpdate (nextProps, nextState) {

  }

  componentWillUpdate (nextProps, nextState) {

  }

  componentDidUpdate (prevProps, prevState) {

  }

  componentWillUnmount () {

  }

  render () {
    return (
      <div className='carousel-container'>
        {this.props.children}
      </div>
    );
  }
}

ImageCarousel.propTypes = {};

export default ImageCarousel;

export class Slide extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount () {

  }
  render () {
    return <div className='carousel-slide'>{this.props.children}</div>;
  }
}
