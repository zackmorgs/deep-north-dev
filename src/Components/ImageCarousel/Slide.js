import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Slide.css';

class Slide extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   image:
    // }
  }

  // componentWillMount() {

  // }

  // componentDidMount() {

  // }

  // componentWillReceiveProps(nextProps) {

  // }

  // shouldComponentUpdate(nextProps, nextState) {

  // }

  // componentWillUpdate(nextProps, nextState) {

  // }

  // componentDidUpdate(prevProps, prevState) {

  // }

  // componentWillUnmount() {

  // }

  render() {
    return (
      <div>
        {/* <img src=""/> */}
        {this.props.children}
      </div>
    );
  }
}

Slide.propTypes = {

};

export default Slide;