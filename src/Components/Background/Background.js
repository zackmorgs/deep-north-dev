import React, { Component } from 'react';
import './Background.css';

export class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }
  componentDidMount() {
    this.setState({
      isLoaded: true
    });
  }
  render() {
    let Container = {
      cssClass: 'bg'
    };

    return (
      <div
        className={
          this.state.isLoaded
            ? (Container.cssClass = 'bg')
            : (Container.cssClass = 'bg loading')
        }
      >
        <Blueprint />
      </div>
    );
  }
}

export class Blueprint extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      shouldGrowGrid: true,
      gridHeight: window.screen.height,
      gridWidth: window.screen.width
    };
    window.handleStateChange = () => {
      this.setState({
        isLoaded: true
      });
    };
    this.addLines = this.addLines.bind(this);

  }
  componentWillUnmount() {}
  componentWillMount() {}
  componentDidUpdate() {
    //console.log('background updated');
  }

  componentDidMount() {
    this.addLines();
  }

  addLines() {
    let Rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

    let Y = document.getElementById('lines-y');
    // let Y_height = Y.clientHeight;
    let X = document.getElementById('lines-x');

    let screenWidth = window.screen.width;
    let screenHeight = window.screen.height;

    let addLines = (endX, endY) => {
      function timerAdd_Y() {
        //console.log('addlinesY', screenHeight,Y.clientHeight);

        // linesY[].classList.add('loaded');
        if (screenHeight > Y.clientHeight) {
          Y.innerHTML += '<div class="line-y"></div>';
        } else {
          stopAdd_Y();
        }
      }

      function stopAdd_Y() {
        // Y.classList.add('loaded');
        clearInterval(addLinesY_Interval);
        endY();
      }

      function timerAdd_X() {
        // console.log('addlinesX', X.clientWidth);

        if (screenWidth > X.clientWidth) {
          X.innerHTML += '<div class="line-x"></div>';
        } else {
          // X.classList.add('loaded');
          stopAdd_x();
        }
      }

      function stopAdd_x() {
        clearInterval(addLinesX_Interval);
        endX();
      }


      var addLinesX_Interval = setInterval(timerAdd_X, 0);
      var addLinesY_Interval = setInterval(timerAdd_Y, 0);
    };

    let maxInterval = 2000;
    let gridXinterval = maxInterval / (window.screen.width / Rem);
    let gridYinterval = maxInterval / (window.screen.height / Rem);

    let animate_Y = function() {
      var linesY = document.querySelectorAll('.line-y');

      var animateY_interval = setInterval(animateY_timer, gridYinterval);

      var index_Y = 0;

      function animateY_timer() {
        //console.log('Y', index_Y, 'of', linesY.length);

        if (index_Y < linesY.length) {
          linesY[index_Y].classList.add('loaded');
          index_Y++;
        } else {
          stopAnimateY();
        }
      }

      function stopAnimateY() {
        // Y.classList.add('loaded');
        clearInterval(animateY_interval);

        document.getElementById('nav-main').classList.remove('nav-loading');
        window.handleStateChange();
      }
    };

    let animate_X = function() {
      var animateX_interval = setInterval(animateX_timer, gridXinterval);
      var index_X = 0;
      var linesX = document.querySelectorAll('.line-x');

      function animateX_timer() {
        // console.log('X:', index_X, 'of', linesX.length);

        if (index_X < linesX.length) {
          linesX[index_X].classList.add('loaded');
          index_X++;
        } else {
          stopAnimateX();
        }
      }

      function stopAnimateX() {
        clearInterval(animateX_interval);
      }
    };

    // animate_X();
    // animate_Y();

    addLines(animate_X, animate_Y);
  }

  render() {
    let className = this.state.isLoaded ? 'loaded' : 'loading';
    return (
      <div id="blueprint" className={className}>
        <div id="lines-y" />
        <div id="lines-x" />
      </div>
    );
  }
}

export default Background;
