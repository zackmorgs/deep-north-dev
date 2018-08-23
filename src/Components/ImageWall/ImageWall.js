import React, { Component } from 'react';
import './ImageWall.css';
import Carousel from './../Carousel/Carousel';
import Images from './../../Data/image-list.json';

const ImageWall = ({ children }) => (
  <div className="image-wall">
    <Carousel />
    <Carousel />
    <Carousel />
    <Carousel />
    <Carousel />

    <Carousel />
    <Carousel />
    <Carousel />
    <Carousel />
    <Carousel />

    <Carousel />
    <Carousel />
    <Carousel />
    <Carousel />
    <Carousel />

    <Carousel />
    <Carousel />
    <Carousel />
    <Carousel />
    <Carousel />

    <Carousel />
    <Carousel />
    <Carousel />
    <Carousel />
    <Carousel />

    <Carousel />
    <Carousel />
    <Carousel />
    <Carousel />
    <Carousel />

    <Carousel />
    <Carousel />
    <Carousel />
    <Carousel />
    <Carousel />
  </div>
);

/*
let getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

window.getRandomImageUrl = function () {
  return url;
}

class ImageWall extends Component {
  constructor(props) {
    super(props);

    window.Images = Images;
    window.maxIndex = window.Images.length - 1;
    window.ImagesInQueue = window.Images;

    selectedIndex = getRandomInt(window.maxIndex);
    window.carouselIndexesInUse.push(selectedIndex);

    this.state = {
      completed: false,
      imageCount: 1, // start with one image
      images: [
        <Carousel />
      ]
    }
  }
  addImage() {
    console.log(null + <b>Test</b>)
  }
  componentDidMount() {
    if (!this.state.completed) {
      console.log('componentDidMount')



      this.setState({
        Images: [...this.state.Images,]
      });


    } else {
      console.log('completed');
    }
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');



  }
  render() {

    for (let i = 0; i < this.state.Images; i++) {
      this.state.imageArray.push(<Carousel />)
    }

    let imageHTML = this.state.images

    return (
      // <div className="image-wall">
      //   {this.state.Images}
      // </div >
      <div className="image-wall">
        {this.state.Images.map(function (result, index) {
          return <Carousel key={index} indexOfImage={initialIndex}/>;
        })}
      </div>
    )
  }
}
*/
export default ImageWall;