import React, { Component } from 'react';
// lib
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

// ui
import './Website.css';
import './Navigation.css';

import {Info, Mail, Briefcase } from 'react-feather';

// data


// pages
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Services from '../Pages/Services/Services';

// components
import Container from '../Components/Container/Container';
import Background from '../Components/Background/Background';
import Frame from '../Components/Frame/Frame';

// go
export default class Website extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      currentPage: 'Home',
      menuOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
    // holy shit you can do this.
  }
  componentDidMount() {
    this.setState({
      isLoaded: true
    });
  }

  handleClick = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };

  render() {
    console.log('Website.js render() :|', 'State:', this.state);
    return (
      <Container id="deep-north">
        <Background />
        <Frame>
          <Router>
            <RouteContainer>
              {/* nav */}
              <Navigation
                id="nav-main"
                className={this.state.menuOpen ? 'nav-open' : 'nav-closed'}
              >
                <div className="nav-toggle">
                  <div className="toggle-container">
                    <a className="toggle" onClick={this.handleClick}>
                      <span className="icon-menu">
                        <span id="l1" className="line"></span>
                        <span id="l2" className="line"></span>
                        <span id="l3" className="line"></span>
                      </span>
                    </a>
                  </div>
                </div>
                <NavList
                  className={this.state.menuOpen ? 'nav-show' : 'nav-hidden'}
                >
                  <NavItem>
                    <NavLink to={'/'}>
                      <div className="icon">
                        <Info />
                      </div>
                      <span className="caption">Home</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to={'/about'}>
                      <div className="icon">
                        <Info />
                      </div>
                      <span className="caption">About</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to={'/services'}>
                      <div className="icon">
                        <Briefcase />
                      </div>
                      <span className="caption">Services</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to={'/contact'}>
                      <div className="icon">
                        <Mail />
                      </div>
                      <span className="caption">Contact Us</span>
                    </NavLink>
                  </NavItem>
                </NavList>
              </Navigation>

              {/* all pages go in here */}
              <main id="route-container">
                <Route exactPath="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/services" component={Services} />
              </main>
            </RouteContainer>
          </Router>
        </Frame>
      </Container>
    );
  }
}

class iconHome extends Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-home"
      />
    );
  }
}
// i made this cause react-router shouted at me and told me to return one component to it so fine there ya go.
let RouteContainer = props => {
  return <div {...props}>{props.children}</div>;
};
RouteContainer.defaultProps = {
  className: 'route-container'
};
// Navigation ie .nav-container
let Navigation = props => {
  return <nav {...props}>{props.children}</nav>;
};
Navigation.defaultProps = {
  className: 'nav-container'
};
// NavList
let NavList = props => {
  return <ul {...props}>{props.children}</ul>;
};
NavList.defaultProps = {
  className: 'nav-list'
};

let NavItem = props => {
  return <li {...props}>{props.children}</li>;
};

NavItem.defaultProps = {
  className: 'nav-item'
};

// NavLink defined by react-router
NavLink.defaultProps = {
  className: 'nav-link',
  activeClassName: 'link-selected',
  onClick: ()=>{
    console.log('clicked')
  }
};
