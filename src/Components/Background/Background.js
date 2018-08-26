import React, { Component } from 'react';
import './Background.css';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// components & contain data & link to pages
// import Background from './../Components/Background/Background';

export class Background extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoaded: false,
      angle: 0
    };
  }
  componentDidMount () {
    this.setState({
      isLoaded: true
    });
  }
  render () {
    let Container = {
      cssClass: 'bg'
    };

    this.state.isLoaded
      ? (Container.cssClass = 'bg')
      : (Container.cssClass = 'bg');
    // ill probably animate the gridlines if i have time.

    return (
      //
      <div className={Container.cssClass}>
        <Blueprint>{this.props.children}</Blueprint>
      </div>
    );
  }
}

export class Blueprint extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isLoaded: false,
      gridStart: 160,
      gridEnd: 80
    };
  }
  componentWillUnmount () {}
  componentWillMount () {
    // this.setState = {};
  }
  componentDidUpdate () {}
  render () {
    return (
      <div id='blueprint'>
        <svg className='gridline' width='80' height='80'>
          <rect x1='88' y1='0' x2='80' y2='0' />
        </svg>
        {this.props.children}
      </div>
    );
  }

  componentDidMount () {
    this.setState({
      isLoaded: true
    });
  }
}

export default Background;
