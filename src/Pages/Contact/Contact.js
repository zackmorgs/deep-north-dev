import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import './Contact.css';

import { Mail, Phone } from 'react-feather';

// dependencies
import { Page } from './../../Components/Page/Page';
import {
  Button,
  ButtonText,
  ButtonIcon
} from './../../Components/Button/Button';
import CallToAction from './../../Components/CallToAction/CallToAction';

// todo: make functional component
class Contact extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    let contact = {
      email: 'contracting@thedeepnorth.ca',
      phone: '1-(647)-717-5252'
    };
    const emailLink = `mailto:${contact.email}?`;
    const phoneLink = `tel:+${contact.phone}`;
    return (
      <Page
        pageTitle="Contact"
        pageDescription="Get in touch with Deep North Contracting"
      >
        <header>
          <h1>Contact</h1>
        </header>
        <p>Thanks so much for your interest in Deep North Contracting!</p>
        <p>Here are a few ways you can reach us:</p>
        <CallToAction>
          <Button href={emailLink} kind="primary">
            <ButtonText>
              <small>{contact.email}</small>
            </ButtonText>
          </Button>
          <Button href={phoneLink}>
            <ButtonText>
              <small>{contact.phone}</small>
            </ButtonText>
          </Button>
        </CallToAction>
      </Page>
    );
  }
}

export default Contact;
