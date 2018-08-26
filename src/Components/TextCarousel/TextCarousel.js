import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    }
    // typography, intro animation who knows
  }

  componentWillMount() {

  }

  componentDidMount() {
    this.setState({
      isLoaded:true
    });
  }

  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps, nextState) {

  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className='carousel-text'>
        {this.props.children}
      </div>
    );
  }
}

TextCarousel.propTypes = {

};

export default TextCarousel;