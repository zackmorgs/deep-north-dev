import React, { Component } from 'react';
import './Hero.css';

export class Hero extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isLoaded: false
    };
  }
  componentDidMount () {
    this.setState({
      isLoaded: true
    });
  }
  render () {
    return (
      <div className={this.state.isLoaded ? 'hero is-loaded' : 'hero'}>
        {this.props.children}
      </div>
    );
  }
}

export class HeroBackground extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return <div className='hero-bg'>{this.props.children}</div>;
  }
}
export class HeroForeground extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return <div className='hero-front'>{this.props.children}</div>;
  }
}
export default Hero;
