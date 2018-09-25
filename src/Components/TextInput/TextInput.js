import React, { Component } from 'react';
import './TextInput.css';

export class TextInput extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   Value:
    // }
  }

  handleChange = event => {
    // console.log('TextInput() : changeHandler()', event);
    this.props.changeHandler(event);
  };

  render = () => {
    return (
      <input
        type="text"
        onChange={this.handleChange}
        placeholder={this.props.PlaceholderText}
        autoComplete={this.props.autoComplete}
      />
    );
  };
}

export default TextInput;
