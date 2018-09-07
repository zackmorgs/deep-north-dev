import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
import TextCarousel from './../../Components/ImageCarousel/ImageCarousel';
import ImageCarousel, {
  Slide
} from './../../Components/ImageCarousel/ImageCarousel';

var Carousel = require('react-responsive-carousel').Carousel;

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
          <HeroBackground>
            {/* <ImageCarousel>
              <Carousel autoPlay interval={1000} infiniteLoop>
                {CarouselImageList.map((CarouselImage, Index) => {
                  return (
                    <div>
                      <img src={CarouselImage} className="carousel-img" />
                    </div>
                  );
                })}
              </Carousel>
            </ImageCarousel> */}
            <Logo />
            <div className="hero-text">
              <h1>General Contractors</h1>
              <span className="subtitle">Odd Job Specialists</span>
              <p>"There is no task too small, tall or odd at all!"</p>
            </div>
            {/* <HeroForeground /> */}
          </HeroBackground>
        </Hero>
        {/* {this.props.children} */}
        <div className="cta" />
        <footer />
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
