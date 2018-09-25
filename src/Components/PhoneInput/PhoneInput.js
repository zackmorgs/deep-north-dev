import React, { Component } from 'react';
import './PhoneInput.css';



class PhoneInput extends Component {
  constructor(props) {
    super(props);
  }
  handleChange = event => {
    console.log('PhoneInput() : changeHandler()', event);
    this.props.changeHandler(event);
    
  };
  render() {
    return ( 
      <input type="tel"
        id={this.props.id}
        onChange={this.handleChange} 
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        autoComplete="tel"
      />
    );
  }
}


export default PhoneInput;
