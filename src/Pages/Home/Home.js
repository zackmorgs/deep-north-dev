import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import Nav from './../../Components/Nav/Nav';
import Services from './../../Components/Services/Services';
import Hero from './../../Components/Hero/Hero';
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
      <div className={this.Container.CssClass}>
        <Hero>
          <h1>General Contractors</h1>
        </Hero>
        {this.props.children}
      </div>
    );
  }
}

export default Home;
