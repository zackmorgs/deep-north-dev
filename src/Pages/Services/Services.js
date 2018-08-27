import React, { Component } from 'react';
import ServiceList from './../../Data/services.json';

// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './Services.css';

export class Service extends Component {
  constructor(props) {
    super(props);
    this.Container = {
      CssClass: ''
    };
  }

  // componentWillMount () {

  // }

  render() {
    this.Container.CssClass += '';
    return (
      <section id="services" className={this.Container.CssClass}>
        <h4>Services</h4>
        <ul className="list-service">
          {ServiceList.map((Service, Index) => {
            return (
              <Link to="service/`${Service}`" Component={Service}>
                <li key={Index} />
              </Link>
            );
          })}
        </ul>
      </section>
    );
  }w
}

export default Service;
