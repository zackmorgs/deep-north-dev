import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    this.setState({
      isLoaded: true
    });
  }
  componentWillReceiveProps (nextProps) {}

  shouldComponentUpdate (nextProps, nextState) {}

  componentWillUpdate (nextProps, nextState) {}

  componentDidUpdate (prevProps, prevState) {}

  componentWillUnmount () {}

  render () {
    return (
      <div className={this.state.isLoaded ? 'carousel-container' : 'carousel-container loading'}>
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
    return <div className='carousel-img'>{this.props.children}</div>;
  }
}
