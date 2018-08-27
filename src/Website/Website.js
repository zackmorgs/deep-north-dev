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
        <Background Angle={0} Width={24} Height={24} />
        <Frame>
          <Router>
            <React.Fragment>
              {/* nav */}

              <Navigation id="nav-home">
                {console.log('Website.render()', this.state)}
                <div className="nav-toggle">
                  <div className="toggle-container">
                    <a className="toggle" onClick={this.handleClick}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="feather feather-menu"
                      >
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                      </svg>
                    </a>
                  </div>
                </div>
                <NavList>
                  {/* className={this.state.menuOpen ? 'nav-show' : 'nav-hidden'} */}
                  <NavItem>
                    <NavLink
                      to={'/contact'}
                      component={<span>Contact</span>}
                    >
                      <span className="caption">Contact Us</span>
                    </NavLink>
                  </NavItem>
                  <NavItem
                    className="nav-link"
                    to={'/contact'}
                    component={<span>Contact</span>}
                  >
                    <NavLink>
                      <span className='caption'>
                        About
                      </span>
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
            </React.Fragment>
          </Router>
        </Frame>
      </Container>
    );
  }
}

class iconBriefcase extends Component {
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
        className="feather feather-briefcase"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
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

class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <nav {...this.props}>{this.props.children}</nav>;
  }
}

Navigation.defaultProps = {
  className: 'nav-container'
};

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

NavLink.defaultProps = {
  className: 'nav-link'
};
