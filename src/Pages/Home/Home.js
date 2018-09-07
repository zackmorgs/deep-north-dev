import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import { Phone } from 'react-feather';

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
              {/* <h1>
                General Contracting for Toronto and the Greater Area
              </h1> */}
            </div>
        </Hero>
        <div className="cta">
          <a href="tel:+6477175252" className="btn cta-telephone">
            <Phone /> Call Us
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
