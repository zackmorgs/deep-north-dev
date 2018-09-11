import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Page from '../../Components/Page/Page';
import ServiceList from './../../Data/services.json';

import './QuoteRequest.css';

export class QuoteRequest extends Component {
  constructor(props) {
    super(props);
    this.Container = {
      CssClass: ''
    };
  }

  // componentWillMount () {

  // }

  render() {
    // this.Container.CssClass;
    return (
      <Page>
        <header>
          <h1>Request a Quote</h1>
        </header>
        <section id="services" className={this.Container.CssClass}>
          {/* <ul className="list-service">
            {ServiceList.map((Service, Index) => {
              return <li key={Index}>{Service}</li>;
            })}
          </ul> */}
          <h1>Request a Quote</h1>
          <p>:D ill do this later</p>
        </section>
      </Page>
    );
  }
}

export default QuoteRequest;
