import React, { Component } from 'react';

import './About.css';
import Page from './../../Components/Page/Page';

export class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page>
        <header>
          <h1>About</h1>
          <h2 className="subtitle">
            &ldquo;No task too small, tall or odd at all&rdquo;
          </h2>
        </header>

        <p>
          Deep North Contracting is a General Contacting company founded by
          Daniel Tracy in 2015.
        </p>
        <p>
          Based in Toronto, Deep North Contracting has completed jobs large and
          small for over 80 residential and commercial clients of all sizes.
        </p>
        <p>
          We've floored apartments, layed tile for restaurants, drywalled
          bedrooms, renovated offices, demolished roofs, and even built pop-up
          shows for famous musical artists like Kanye West, Pusha-T and The
          Weeknd.
        </p>
        <p>
          We're based in Toronto, but we work all over the place. Don't hesitate
          to <a href="mailto:contracting@thedeepnorth.ca">contact us</a> for any
          and all queries.
        </p>
      </Page>
    );
  }
}

export default About;
