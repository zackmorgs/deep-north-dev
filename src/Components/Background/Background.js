import React, { Component } from 'react';
import './Background.css';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

let liveHeight = () => {
  return window.screen.height;
};

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
      shouldGrowGrid: true,
      gridHeight: window.screen.height,
      gridWidth: window.screen.width
    };

    this.gridXinterval = window.screen.width / 22;
    this.gridYinterval = window.screen.height / 36;

    this.grid = () => {
      const x_max = window.screen.width;
      const y_max = window.screen.height;
    };
  }
  componentWillUnmount () {}
  componentWillMount () {
    // this.setState = {};
  }
  componentDidUpdate () {
    console.log('should probably change gridXinterval +')
  }

  generateBluepring () {
    

  }

  render () {
    return (
      <div id='blueprint' onLoad={this.generateBluepring.bind()}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox={'0 0 ' + this.state.gridHeight + ' ' + this.state.gridWidth}
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          }}
        >
          <line y1={0} y2={100} x1={50} x2={50} stroke-width={8} stroke-color={'white'}/>
        </svg>
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
