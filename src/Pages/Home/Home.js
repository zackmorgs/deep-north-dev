import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from './../../Components/Nav/Nav';
import Page from './../../Components/Page/Page';
import Services from './../../Components/Services/Services';
import Hero, { HeroForeground, HeroBackground } from './../../Components/Hero/Hero';
import TextCarousel from './../../Components/ImageCarousel/ImageCarousel';
import ImageCarousel, {
  Slide
} from './../../Components/ImageCarousel/ImageCarousel';
import Logo from './../../Components/Logo/Logo';
// import ImageWall from './../../Components/ImageWall/ImageWall';
import './Home.css';
// import logo from './../../Components/../svg/logo-colorized.svg';

// import Images from './../../Components/../Data/image-list.json';

class Home extends Component {
  constructor (props) {
    super(props);
    this.Container = {
      CssClass: 'page page-home'
    };
  }
  render () {
    return (
      <Page className={this.Container.CssClass}>
        <Hero>
          {/* Image backgrounds */}
          <HeroBackground>
            <ImageCarousel>

              <Slide>
                <ImageCarousel>
                  <img src="" alt=""/>  
                </ImageCarousel>
              </Slide>

              <Slide>
                <ImageCarousel>
                  <img src="" alt=""/>  
                </ImageCarousel>
              </Slide>

              <Slide>
                <ImageCarousel>
                  <img src="" alt=""/>
                </ImageCarousel>
              </Slide>

            </ImageCarousel>
          </HeroBackground>

          {/* Front text */}
          <HeroForeground>

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

          </HeroForeground>

        </Hero>
        {/* {this.props.children} */}

        <footer>
          <Logo />
        </footer>
      </Page>
    );
  }
}

export default Home;

