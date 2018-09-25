import React, { Component } from 'react';

// lib
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// ui
import './Website.css';
import './../Typography/Type.css';

import { Home as IconHome, Info, Mail, FileText, Grid } from 'react-feather';

// data

// pages
import Home from './../../Pages/Home/Home';
import About from './../../Pages/About/About';
import Contact from './../../Pages/Contact/Contact';
import QuoteRequest from './../../Pages/QuoteRequest/QuoteRequest';
import Gallery from './../../Pages/Gallery/Gallery';

// components
import Navigation, {
  NavToggle,
  NavList,
  NavItem
} from './../Navigation/Navigation';
import Frame from './../Frame/Frame';
import Container from './../Container/Container';
import Background from './../Background/Background';

// go
export default class Website extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      backgroundLoaded: false,
      menuOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleBackgroundLoaded = this.handleBackgroundLoaded.bind(this);
  }
  handleClick() {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
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

  componentDidUpdate() {
    console.log('Website.js componentDidUpdate() :|', 'State:', this.state);
  }
  componentWillUpdate() {
    console.log('Website.js componentWillUpdate() :|', 'State:', this.state);
  }
  render() {
    console.log('Website.js render() :|', 'State:', this.state);

    // nav class logic
    let className_nav = '';
    if (!this.state.isLoaded) {
      className_nav = 'nav-loading';
    }
    // className_nav += this.state.menuOpen ? 'nav-open' : '';

    return (
      <Container id="deep-north">
        {/* <Background onLoad={this.handleBackgroundLoaded} /> */}
        <Router>
          <Frame>
            <Navigation id="nav-main" showMenu={this.state.menuOpen}>
              <NavToggle
                clickHandler={this.handleClick}
                isToggled={this.state.menuOpen}
              />
              {/* <h1>Menu</h1> */}
              <NavList showMenu={this.state.menuOpen}>
                <NavItem>
                  <Link to={'/'}>
                    <div className="icon">
                      <IconHome />
                    </div>
                    <span className="caption">Home</span>
                  </Link>
                </NavItem>

                <NavItem>
                  <Link to={'/about'}>
                    <div className="icon">
                      <Info />
                    </div>
                    <span className="caption">About</span>
                  </Link>
                </NavItem>

                <NavItem>
                  <Link to={'/gallery'}>
                    <div className="icon">
                      <Grid />
                    </div>
                    <span className="caption">Gallery</span>
                  </Link>
                </NavItem>

                <NavItem>
                  <Link to={'/request-estimate'}>
                    <div className="icon">
                      <FileText />
                    </div>
                    <span className="caption">Get Quote</span>
                  </Link>
                </NavItem>

                <NavItem>
                  <Link to={'/contact'}>
                    <div className="icon">
                      <Mail />
                    </div>
                    <span className="caption">Contact</span>
                  </Link>
                </NavItem>
              </NavList>
            </Navigation>

            <main>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/request-estimate" component={QuoteRequest} />
                <Route path="/gallery" component={Gallery} />
              </Switch>
              <footer>&copy; Copyright 2018. Deep North Contracting</footer>
            </main>
          </Frame>
        </Router>
        {/* <footer>
          <span>2018</span>
        </footer> */}
      </Container>
    );
  }
}

// Link defined by react-router
Link.defaultProps = {
  className: 'nav-link',
  onClick: () => {
    this.state.menuOpen = false;
  }
};
