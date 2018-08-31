import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Page from '../../Components/Page/Page';
import ServiceList from './../../Data/services.json';

import './Services.css';

export class Service extends Component {
  constructor (props) {
    super(props);
    this.Container = {
      CssClass: ''
    };
  }

  // componentWillMount () {

  // }

  render () {
    // this.Container.CssClass;
    return (
      <Page >
        <header>
          <h1>Services</h1>
        </header>
        <section id='services' className={this.Container.CssClass}>
          <ul className='list-service'>
            {ServiceList.map((Service, Index) => {
              return (

                <li key={Index}>
                  {Service}
                </li>
              );
            })}
          </ul>
        </section>
      </Page>
    );
  }
}

export default Service;
