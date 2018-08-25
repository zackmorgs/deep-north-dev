import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import Nav from './../../Components/Nav/Nav';
import Services from './../../Components/Services/Services';
import Hero from './../../Components/Hero/Hero';
import Logo from './../../Components/Logo/Logo';
import ImageWall from './../../Components/ImageWall/ImageWall';
import './Home.css';
// import logo from './../../Components/../svg/logo-colorized.svg';

import Images from './../../Components/../Data/image-list.json';

// todo: make functional component
class Home extends Component {
  constructor(props) {
    super(props);
    // this way each instance of Carousel wont have to have a bigass array of images.
    window.Images = Images;
    window.maxIndex = window.Images.length - 1;
    window.ImagesInQueue = window.Images;
  }
  render() {
    return (
      <React.Fragment>
        <div id="background">
          <ImageWall />
        </div>
        <div id="homepage">
          <Hero>
            <Logo />
            <Nav />
          </Hero>
          <Services />
        </div>

      </React.Fragment>
    );
  }
}

export default Home;





