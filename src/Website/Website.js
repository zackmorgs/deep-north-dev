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
              <nav className='nav-container'>
                <ul>
                  <li>
                    <NavLink
                      className='nav-link'
                      to={'/'}
                      component={Home}
                      onClick={this.handleMenuItemClick.bind(this)}
                      onSelect={console.log('selected `${this}`')}
                    >
                      <span className='caption'>Home</span>
                    </NavLink>
                  </li>
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
                </ul>
              </nav>

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
