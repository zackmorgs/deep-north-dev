import React, { Component } from 'react';

// lib
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// data


// pages
import Home from '../Pages/Home/Home';
import About from '../Pages/Home/Home';
import Contact from '../Pages/Home/Home';
import Services from '../Pages/Home/Home';

// components
import Background from '../Components/Background/Background';
import Frame from '../Components/Frame/Frame';
import Nav from '../Components/Nav/Nav';

// go
export default class Website extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoaded: false,
      currentPage: 'Home'
    };
  }
  handleMenuItemClick() {
    console.log(
      'handled.'
    );
  }

  componentDidMount () {
    this.setState({
      isLoaded: true
    });
  }
  render () {
    let Container = {
      CssClass: 'container'
    };

    this.state.isLoaded
      ? (Container.CssClass += 'is-loaded')
      : console.log('loading...');

    return (
      <div id='deep-north' classsName={Container.CssClass}>
        <Background Angle={0} Width={24} Height={24}>
          <Frame>
            <Router>
              <React.Fragment>
                <nav className='nav-container'>
                  <ul>
                    <li>
                      <Link
                        to={'/'}
                        component={Home}
                        onClick={this.handleMenuItemClick.bind(this)}
                      >
                        <span className='Icon' />
                        <span className='caption'>Home</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
                <Route exactPath='/' component={Home} />
                <Route exactPath='/about' component={About} />
                <Route exactPath='/contact' component={Contact} />
                <Route exactPath='/services' component={Services} /> */
              </React.Fragment>
            </Router>
          </Frame>
        </Background>
      </div>
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
