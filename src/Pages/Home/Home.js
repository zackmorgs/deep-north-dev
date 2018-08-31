import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AutoPlaySwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';

// componenet
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

// class Home extends Page {
// ^ someday?
class Home extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    // const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
    return (
      <Page>
        <Hero>
          {/* Image backgrounds */}
          <HeroBackground>
            <ImageCarousel>
              <AutoPlaySwipeableViews
                springConfig={{
                  duration: '8',
                  easeFunction: 'ease-out',
                  delay: 0.0
                }}
              >
                {CarouselImageList.map((CarouselImage, Index) => {
                  return (
                    <Slide key={Index}>
                      <img src={CarouselImage} className='carousel-img' />
                    </Slide>
                  );
                })}
              </AutoPlaySwipeableViews>
            </ImageCarousel>
            <HeroForeground>

            </HeroForeground>
          </HeroBackground>
        </Hero>
        {/* {this.props.children} */}
        <footer>
          <Logo />
        </footer>
      </Page>
    );
  }

  componentDidMount () {
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
