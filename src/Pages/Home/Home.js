import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Phone, Mail, Facebook, Instagram } from 'react-feather';

// component
import './Home.css';

// data
import CarouselImageList from './../../Components/../Data/carousel-list.json';

// components
import Logo from './../../Components/Logo/Logo';
import Page from './../../Components/Page/Page';
import Hero, {
  HeroForeground,
  HeroBackground
} from './../../Components/Hero/Hero';
// import TextCarousel from './../../Components/ImageCarousel/ImageCarousel';
// import ImageCarousel, {
//   Slide
// } from './../../Components/ImageCarousel/ImageCarousel';

// var Carousel = require('react-responsive-carousel').Carousel;

// class Home extends Page {
// ^ someday?
class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
    return (
      <Page>
        <Hero>
          {/* Image backgrounds */}
          {/* <HeroBackground>
          </HeroBackground> */}
          <Logo />
          <div className="hero-text">
            <h3>Toronto - Cottage Country - GTA</h3>
          </div>
        </Hero>
        <div className="cta">
          <a className="btn cta-telephone" href="tel:+6477175252">
            <Phone /> Telephone
          </a>
          <a className="btn" href="email:contracting@thedeepnorth.ca">
            <Mail /> Email
          </a>
          <a className="btn" href="https://facebook.com/deepnorthwat">
            <Facebook /> Facebook
          </a>
          <a className="btn" href="http://instagram.com/deepnorthcontracting">
            <Instagram /> Instagram
          </a>
        </div>
        <h1>Test</h1>
        <h2>Test</h2>
        <h3>Test</h3>
        <h4>Test</h4>
      </Page>
    );
  }

  componentDidMount() {
    console.log('Page : componentDidMount() Mounted');
    this.setState({
      isLoaded: true
    });
  }
}

Home.defaultProps = {
  className: 'page-home'
};

export default Home;
