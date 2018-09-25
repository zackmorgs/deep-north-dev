import React, { Component } from 'react';

import './About.css';
import Page from './../../Components/Page/Page';
import Button, { ButtonText } from './../../Components/Button/Button';
import Section from './../../Components/Section/Section';
import Paragraph from './../../Components/Paragraph/Paragraph';
import CallToAction from './../../Components/CallToAction/CallToAction';

export class About extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Page pageTitle="About" pageDescription="Who We Are and What We Do">
        <header>
          <h1>About</h1>
          {/* <h2 className="subtitle">
            &ldquo;No task too small, tall or odd at all&rdquo;
          </h2> */}
        </header>

        <Section>
          <h3>Who We Are</h3>
          <Paragraph>
            Deep North Contracting is a small General Contacting company founded by
            Daniel Tracy in 2015.
          </Paragraph>
        </Section>
        <Section>
          <h3>Where We're From</h3>
          <Paragraph>
            Based in Toronto, Deep North Contracting has completed jobs large
            and small for over 80 residential and commercial clients of all
            sizes.
          </Paragraph>
        </Section>
        <Section>
          <h3>What We Do</h3>
          <Paragraph>
            "There is no task too small, tall or odd at all!"
          </Paragraph>
          <Paragraph>
            We've floored apartments, layed tile for restaurants, drywalled
            bedrooms, renovated offices, demolished roofs, and even built pop-up
            shows for famous musical artists like Kanye West, Pusha-T and The
            Weeknd.
          </Paragraph>
        </Section>
        <Section>
          <h3>Who We Work For</h3>
          <Paragraph>
            We'll work for pretty much anybody. Whether you're a residential or commercial client we can suit your needs.
          </Paragraph>
          <Paragraph>
            We're based in Toronto, but we work all over the place. Don't
            hesitate to{' '}
            <a href="mailto:contracting@thedeepnorth.ca">contact us</a> for any
            and all queries.
          </Paragraph>
        </Section>
        <CallToAction>
          <Button kind="primary" href="/contact">
            <ButtonText>Contact Us</ButtonText>
          </Button>
          <Button href="request-estimate">
            <ButtonText>Request a Quote</ButtonText>
          </Button>
        </CallToAction>
      </Page>
    );
  }
}

export default About;
