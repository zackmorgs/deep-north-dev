import React, { Component } from 'react';

// lib
import { Switch } from 'react-router';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';
// ui
import './Website.css';
import './Type.css';
import './Navigation.css';

import { Info, Mail, Briefcase } from 'react-feather';

// data

// pages
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Services from '../Pages/Services/Services';

// components
import Container from '../Components/Container/Container';
import Background from '../Components/Background/Background';

// go
export default class Website extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      backgroundLoaded: false,
      menuOpen: false
    };
    //this.handleClick = this.handleClick.bind(this);
    this.handleBackgroundLoaded = this.handleBackgroundLoaded.bind(this);
  }
  componentDidMount() {
    this.setState({
      isLoaded: true
    });
  }
  handleBackgroundLoaded() {
    this.setState({
      backgroundLoaded: true
    });
  }
  componentWillUnmount() {}
  handleClick = () => {
    console.log('handleClick()');
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };
  componentDidUpdate() {
    console.log('Website.js componentDidUpdate() :|', 'State:', this.state);
  }
  componentWillUpdate() {
    console.log('Website.js componentWillUpdate() :|', 'State:', this.state);
  }
  compo;
  render() {
    console.log('Website.js render() :|', 'State:', this.state);

    // nav class logic
    let className_nav = '';
    if (!this.state.isLoaded) {
      className_nav = 'nav-loading';
    }
    className_nav += this.state.menuOpen ? 'nav-open' : '';

    return (
      <Container id="deep-north">
        <Background onLoad={this.handleBackgroundLoaded} />
        <Router>
          <Frame>
            <Navigation id="nav-main" className={className_nav}>
              <div className="nav-container">
                <div className="nav-toggle">
                  <a onClick={this.handleClick}>
                    <label className="nav-toggle-caption">Menu</label>
                    <span className="icon-menu">
                      <span id="l1" className="line" />
                      <span id="l2" className="line" />
                      <span id="l3" className="line" />
                    </span>
                  </a>
                </div>
                <NavList
                  className={
                    'nav-list ' +
                    (this.state.menuOpen ? 'nav-show' : 'nav-hidden')
                  }
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
              </div>
            </Navigation>

            <main>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about/" component={About} />
                <Route path="/contact/" component={Contact} />
                <Route path="/services/" component={Services} />
              </Switch>
            </main>
          </Frame>
        </Router>
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
let Frame = props => {
  return <div {...props}>{props.children}</div>;
};
Frame.defaultProps = {
  className: 'frame'
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
  onClick: () => {
    this.state.menuOpen = false;
  }
};
