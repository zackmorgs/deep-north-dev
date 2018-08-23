import React, { Component } from 'react';
import ServiceList from './../../Data/services.json';
import './Services.css';

export class Service extends Component {
  // constructor() {

  // }
  // componentWillMount () {

  // }
  render() {
    // console.log(ServiceList);
    let serviceHTML = ServiceList.map((Service, index) => {
      return <li key={index}>{Service}</li>;
    });
    return (
      <div className="services">
        <h4>Services</h4>
        <ul className="service-list">{serviceHTML}</ul>
      </div>
    );
  }
}

export default Service;
