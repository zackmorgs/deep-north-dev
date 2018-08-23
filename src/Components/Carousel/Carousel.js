import React, { Component } from 'react';
import './Carousel.css';
// import ReactDOM from 'react-dom';

let getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

window.carouselIndexesInUse = [];
let selectedIndex = 0;

export class Carousel extends Component {
  constructor(props) {
    super();
    selectedIndex = getRandomInt(window.maxIndex);
    window.carouselIndexesInUse.push(selectedIndex);
    this.state = {
      indexOfImage: getRandomInt(window.maxIndex)
    };
    // window.imagesInQueue.splice(this.state.indexOfImage, 1)

  }
  render() {
    return (
      <div className="carousel" onLoad={this.handleLoad.bind(this)}>
        <img src={window.ImagesInQueue[this.state.indexOfImage]} />
      </div>
    );
  }
  handleLoad() {
    // on load

    window.setTimeout(() => {
      let nextImageIndex = getRandomInt(window.maxIndex);
      window.maxIndex--;
      // window.imagesInQueue.splice(this.state.indexOfImage, 1)
      this.setState({
        index: nextImageIndex
      });
    }, 3000);
  }
}

export default Carousel;
