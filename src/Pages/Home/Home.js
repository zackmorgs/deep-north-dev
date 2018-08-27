import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AutoPlaySwipeableViews from 'react-swipeable-views';

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
    return (
      <Page>
        <Hero>
          {/* Image backgrounds */}

          <HeroBackground>
            <ImageCarousel>
              <AutoPlaySwipeableViews>
                {CarouselImageList.map((CarouselImage, Index) => {
                  return (
                    <Slide key={Index}>
                      <img
                        src={CarouselImage}
                        alt='Deep North Contracting'
                        className='carousel-img'
                      />
                    </Slide>
                  );
                })}
                ;
              </AutoPlaySwipeableViews>
            </ImageCarousel>
          </HeroBackground>

          {/* Front text */}
          {/* <HeroForeground>

            <TextCarousel>
              <h1>General Contractors</h1>
              <span className='subtitle'>Odd-job specialists</span>
            </TextCarousel>

            <TextCarousel>
              <h1>A team you can trust</h1>
              <span className='subtitle'>Odd-job specialists</span>
            </TextCarousel>

            <TextCarousel>
              <h1>General Contractors</h1>
              <span className='subtitle'>Odd-job specialists</span>
            </TextCarousel>

          </HeroForeground> */}
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
