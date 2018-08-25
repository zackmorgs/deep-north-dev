import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import Nav from './../../Components/Nav/Nav';
import Services from './../../Components/Services/Services';
import Hero from './../../Components/Hero/Hero';
import Logo from './../../Components/Logo/Logo';
import ImageWall from './../../Components/ImageWall/ImageWall';
import './Home.css';
// import logo from './../../Components/../svg/logo-colorized.svg';

import Images from './../../Components/../Data/image-list.json';

// todo: make functional component
class Home extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <React.Fragment>
        <div className='frame'>
          {props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;





