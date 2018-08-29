import React, { Component } from 'react';
import './Header.css';

let Header = (props) => {
  return (
    <header>
      <h1>
        {props.Title}
      </h1>
      {props.children}
    </header>
  );
}

export default Header;