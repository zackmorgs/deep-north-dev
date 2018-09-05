import React, { Component } from 'react';

import Page from './../../Components/Page/Page';

export class About extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Page>
        <header>
          <h1>About</h1>
          <span className="subtitle">
            Who We Are and What We Do
          </span>
        </header>
        <p></p>
      </Page>
    );
  }
}

export default About;
