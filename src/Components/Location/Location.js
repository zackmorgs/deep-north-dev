import React from 'react';
import { MapPin } from 'react-feather';
import './Location.css';

const Location = props => (
  <div className={'ui-location'} {...props}>
    <div className="location-icon">
      <MapPin />
    </div>
    {/* <span>Now Serving</span> */}
    <div className="location-text">{props.children}</div>
  </div>
);

export default Location;
