import React, {Component} from 'react';
import { MapPin } from 'react-feather';
import './Location.css';

const Location = props => (
  <div className={'ui-location'} {...props}>
    {/* <div className="location-icon">
      <MapPin />
    </div> */}
    <div className="location-text">{props.children}</div>
  </div>
);

export default Location;
