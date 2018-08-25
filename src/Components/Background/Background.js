import React, { Component } from 'react';
import './Background.css';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// components & contain data & link to pages
// import Background from './../Components/Background/Background';

export class Background extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      angle: 0
    };
  }

  componentDidMount() {
    this.setState({
      isLoaded: true
    });
  }

  render() {
    let Container = {
      CssClass: 'bg'
    };

    let fillColor = '%23fff';
    let gridUnit = '1rem';
    let angle = 0;

    let opacities = {
      first: 0.08,
      last: 0.15
    };

    let backgroundImageCss =
      'url("data:image/svg+xml;, <svg xmlns="http://www.w3.org/2000/svg" fill="' +
      fillColor +
      '"><pattern id="a" `width="' +
      gridUnit +
      '" height="' +
      gridUnit +
      '" patternUnits="userSpaceOnUse" patternTransform="rotate(' +
      angle +
      ')"><path d"M10 0v9h9v1h-9v9h-1v-9h-9v-1h9v-9" opacity="' +
      opacities.first +
      '"><path d="M0 19h19v-19h1v20h-20" opacity="' +
      opacities.last +
      '"></pattern><rect width="100%" height="100%" fill="%23004890"/><rect width="100%" height="100%" fill="url(%23a)"/></svg>); !important';

    return (
      //
      <div
        className={Container.CssClass}
        style={{
          backgroundImage: backgroundImageCss
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Background;
