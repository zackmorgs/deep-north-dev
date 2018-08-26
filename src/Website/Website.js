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
          : 'nav-container `${props.className}`'
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
      currentPage: 'Home'
    };
  }
  handleMenuItemClick () {
    console.log('handled.');
  }

  componentDidMount () {
    this.setState({
      isLoaded: true
    });
  }
  render () {
    // let Container = {
    //   CssClass: 'container'
    // };

    // this.state.isLoaded
    //   ? (Container.CssClass = this.props.className + ' is-loaded')
    //   : (Container.CssClass = this.props.className + ' is-loading');

    return (
      <Container id='deep-north'>
        <Background Angle={0} Width={24} Height={24} />
        <Frame>
          <Router>
            <Page className='page'>
              <Navigation className='nav-home'>
                <NavList>
                  <NavItem>
                    <NavLink
                      className='nav-link'
                      to={'/'}
                      component={Home}
                      onClick={this.handleMenuItemClick.bind(this)}
                      onSelect={console.log('selected `${this}`')}
                    >
                      <div className='icon'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          class='feather feather-home'
                        >
                          <path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
                          <polyline points='9 22 9 12 15 12 15 22' />
                        </svg>
                      </div>
                      <span className='caption'>Home</span>
                    </NavLink>
                  </NavItem>
                  <li>
                    <NavLink
                      className='nav-link'
                      to={'/'}
                      component={About}
                      onClick={this.handleMenuItemClick.bind(this)}
                    >
                      <span className='caption'>About</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className='nav-link'
                      to={'/'}
                      component={Contact}
                      onClick={this.handleMenuItemClick.bind(this)}
                    >
                      <span className='caption'>Contact</span>
                    </NavLink>
                  </li>
                </NavList>
              </Navigation>

              <main>
                <Route exactPath='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/services' component={Services} />
              </main>
            </Page>
          </Router>
        </Frame>
      </Container>
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
