import React, { Component } from 'react';

import classNames from 'classnames';

import TextInput from './../TextInput/TextInput';

import './NameInput.css';

export class NameInput extends Component {
  constructor(props) {
    super(props);
  }
  handleChange = event => {
    console.log('NameInput : changeHandler()', event);
    this.props.changeHandler(event);
  };
  render() {
    return (
      <TextInput
        id={this.props.id}
        className="input-name"
        changeHandler={this.handleChange}
        autoComplete="name"
      />
    );
  }
}

export default NameInput;
