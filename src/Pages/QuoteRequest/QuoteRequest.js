import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Page from '../../Components/Page/Page';
import Button, { ButtonText } from './../../Components/Button/Button';
import Paragraph from './../../Components/Paragraph/Paragraph';
import Section from './../../Components/Section/Section';
import NameInput from './../../Components/NameInput/NameInput';
import PhoneInput from './../../Components/PhoneInput/PhoneInput';
import Label from './../../Components/Label/Label';
import CallToAction from './../../Components/CallToAction/CallToAction';
import TextArea from './../../Components/TextArea/TextArea';

import ServiceList from './../../Data/services.json';

import { Plus } from 'react-feather';

import './QuoteRequest.css';

export class QuoteRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clientName: '',
      clientPhone: '',
      clientEmailMessage: ''
    };
  }

  // componentWillMount () {

  // }

  handleNameChange(event) {
    this.setState({
      clientName: event.target.value
    });
    // this.setState({ typed: event.target.value });

    console.log('QuoteRequest() : handleNameChange -', event);
  }
  handlePhoneChange(event) {
    this.setState({
      clientPhone: event.target.value
    });
    console.log('quoteRequest() : handlePhoneChange - ', event);
  }
  render() {
    // this.Container.CssClass;
    let clientEmail = this.state.clientEmail;
    let format = string => {
      return string.replace(/ /g, '%20');
    };
    let Subject = `Quote Request: ${this.state.clientName}`;
    let Body = `Hello, I'm ${
      this.state.clientName
    } and I'd like to request a quote. \n(As many details as you wish to provide us here.) \nIf you wish, you can reach my phone at ${
      this.state.clientPhone
    } or this email address.`;

    let emailLink = `mailto:contracting@thedeepnorth.ca?subject=${format(
      Subject
    )}&body=${format(Body)}`;

    return (
      <Page pageTitle="Request a Quote" pageDescription="Thinking of Working with Deep North Contracting? We make it easy.">
        <header>
          <h1>Request a Quote</h1>
        </header>

        {/* <div className="steps">
          <ol>
            <li>What are you </li>
            <li>Step</li>
            <li>Step</li>
          </ol>
        </div> */}
        <Section>
          <br />
          <Paragraph>Thanks so much taking an interest in us.</Paragraph>
          <Paragraph>
            For any and all inquiries feel free to call us:{' '}
            <a href="tel:+16477175252">1-(647)-717-5252</a>
          </Paragraph>
          <Paragraph>
            If you'd prefer to email us, please fill out the form below.
          </Paragraph>
        </Section>

        <Section className="contact-info">
          <div className="name">
            <Label htmlFor="Fullname">Your Name</Label>
            <NameInput
              id="Fullname"
              changeHandler={this.handleNameChange.bind(this)}
            />
          </div>
          <div className="phone">
            <Label htmlFor="Phone">Phone Number</Label>
            <PhoneInput
              id="Phone"
              changeHandler={this.handlePhoneChange.bind(this)}
            />
          </div>
          {/* <div className="detail">
            <Label>Details</Label>
            <TextArea />
          </div> */}
        </Section>

        <CallToAction>
          <Button kind="primary" href={emailLink}>
            <ButtonText>Send Email</ButtonText>
          </Button>
        </CallToAction>
      </Page>
    );
  }
}

/* let bodyText = this.state.messageText; */

// let emailLink = `
//   ref="mailto:${deepNorthEmail}?subject=Big%20News&body=Body-goes-here"`;

export default QuoteRequest;
