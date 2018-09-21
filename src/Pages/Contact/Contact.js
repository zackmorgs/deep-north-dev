import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import './Contact.css';

import {Mail,Phone} from 'react-feather';

// dependencies
import { Page } from './../../Components/Page/Page';

// todo: make functional component
class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Page>
        <header>
          <h1>Contact</h1>
        </header>
        <ul>
          <li>
            <div className="icon">
              <Mail />
            </div>
            <a href="mailto:contracting@thedeepnorth.ca">Email</a>
          </li>
          <li>
            <div className="icon">
              <Phone/>
            </div>
            <a href="tel:+6477175252">Call Us</a>
          </li>
          <li />
        </ul>
      </Page>
    );
  }
}

export default Contact;
