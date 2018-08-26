import React, { Component } from 'react';
import './Website.css';
import './Navigation.css';
// lib
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

// data

// pages
import Home from '../Pages/Home/Home';
import About from '../Pages/Home/Home';
import Contact from '../Pages/Home/Home';
import Services from '../Pages/Home/Home';

// components
import Container from '../Components/Container/Container';
import Background from '../Components/Background/Background';
import Frame from '../Components/Frame/Frame';
// import Nav from '../Components/Nav/Nav';
import Page from '../Components/Page/Page';

// nav : teeny functional componenets tee hee
let Navigation = props => {
  return (
    <nav
      className={
        !(typeof props !== props.className.length)
          ? 'nav-container'
          : 'nav-container' + ' ' + props.className
      }
    >
      {props.children}
    </nav>
  );
};

let NavList = props => {
  return <ul className='nav-list'>{props.children}</ul>;
};

let NavItem = props => {
  return <li className='nav-item'>{props.children}</li>;
};

// go
export default class Website extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoaded: false,
      currentPage: 'Home',
      showFullNavigation: false
    };
  }

  componentDidMount () {
    this.setState({
      isLoaded: true
    });
  }
  handleNavigationToggle () {
    console.log('toggle nav');
    this.state.showFullNavigation
      ? this.setState({
        stateshowFullNavigation: false
      })
      : this.setState({
        stateshowFullNavigation: true
      });
  }
  render () {
    console.log(this.state);
    return (
      <Container id='deep-north'>
        <Background Angle={0} Width={24} Height={24} />
        <Frame>
          <Router>
            <React.Fragment>
              <div
                className='nav-toggle'
                onClick={this.handleNavigationToggle.bind(this)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='feather feather-menu'
                >
                  <line x1='3' y1='12' x2='21' y2='12' />
                  <line x1='3' y1='6' x2='21' y2='6' />
                  <line x1='3' y1='18' x2='21' y2='18' />
                </svg>
              </div>

              <Navigation
                id='nav-home'
                className={this.state.showFullNavigation ? '' : 'nav-hidden'}
              >
                <NavList>
                  <NavItem>
                    <NavLink className='nav-link' to={'/'} component={Contact}>
                      <span className='caption'>Contact</span>
                    </NavLink>
                  </NavItem>
                </NavList>
              </Navigation>

              <main>
                <Route exactPath='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/services' component={Services} />
              </main>
            </React.Fragment>
          </Router>
        </Frame>
      </Container>
    );
  }
}

class iconBriefcase extends Component {
  render () {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='feather feather-briefcase'
      >
        <rect x='2' y='7' width='20' height='14' rx='2' ry='2' />
        <path d='M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16' />
      </svg>
    );
  }
}

class iconHome extends Component {
  render () {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='feather feather-home'
      />
    );
  }
}

// function About () {
//   return <div>About</div>;
// }

// function Contact () {
//   return <div>Contact</div>;
// }

// function Services () {
//   return <div>services</div>;
// }
