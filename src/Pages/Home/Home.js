import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Phone, Mail, Facebook, Instagram, ChevronRight } from 'react-feather';

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
import Location from './../../Components/Location/Location';

import CallToAction from './../../Components/CallToAction/CallToAction';
import {
  Button,
  SocialButton,
  ButtonIcon,
  ButtonText
} from './../../Components/Button/Button';

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
      <Page pageTitle="Home" pageDescription="Homepage of Toronto's All-Purpose General Contracting 'Odd-job Specialists'; Deep North Contracting.">
        <Hero>
          {/* Image backgrounds */}
          {/* <HeroBackground>
          </HeroBackground> */}
          <Logo />
          {/* FIX THE LOGO
            - top right horn 1 less pokey
            - ear go up
            - shoulders make liek other logo.
            - hammers? hammers.
           */}
          <div className="hero-text">
            <h1>General Contractors</h1>
            <blockquote>
              <h2 className="subtitle">Odd Job Specialists</h2>
            </blockquote>
            <Location>
              Toronto &middot; Cottage Country &middot; Greater Area
            </Location>
            <div className="cta">
              <Button kind="primary" href="/about">
                <ButtonText>Learn More</ButtonText>
              </Button>
              <Button href="/request-estimate">
                <ButtonText>
                  Get a Quote
                </ButtonText>
                {/* <ButtonIcon>
                  <ChevronRight />
                </ButtonIcon> */}
              </Button>
            </div>
          </div>
        </Hero>
        <CallToAction className="cta social">
          <Button
            id="cta-btn-telephone"
            href="tel:+6477175252"
            alt="Give Us a Call"
            kind="social"
          >
            <ButtonIcon>
              <Phone />
            </ButtonIcon>
            <ButtonText>Telephone</ButtonText>
          </Button>

          <Button
            id="cta-btn-email"
            href="mailto:contracting@thedeepnorth.ca"
            alt="Email Us"
            kind="social"
          >
            <ButtonIcon>
              <Mail />
            </ButtonIcon>
            <ButtonText>Email</ButtonText>
          </Button>

          <Button
            id="cta-btn-facebook"
            href="http://instagram.com/deepnorthcontracting"
            alt="Visit Our Facebook"
            kind="social"
          >
            <ButtonIcon>
              <Facebook />
            </ButtonIcon>
            <ButtonText>Facebook</ButtonText>
          </Button>

          <Button
            id="cta-btn-facebook"
            href="http://instagram.com/deepnorthcontracting"
            kind="social"
          >
            <ButtonIcon>
              <Instagram />
            </ButtonIcon>
            <ButtonText>Instagram</ButtonText>
          </Button>
        </CallToAction>
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
