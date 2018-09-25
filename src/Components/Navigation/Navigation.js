import React from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames';

import './Navigation.css';

// Navigation ie .nav-container  -----------------------------------------------------------------------
let Navigation = props => {
  return (
    <nav
      id={props.id} 
      className={
        classNames({
          "nav-open": props.showMenu,
        })
    }>
      <div className="nav-container">{props.children}</div>
    </nav>
  );
};

// Nav Toggle --------------------------------
let NavToggle = props => {
  return (
    <div
      className={classNames({
        'nav-toggle': true,
        'toggle-not-toggled': props.isToggled === false,
        'toggle-is-toggled': props.isToggled
      })}
    >
      <span className="icon-menu" onClick={props.clickHandler}>
        <span id="l1" className="line" />
        <span id="l2" className="line" />
        <span id="l3" className="line" />
      </span>
    </div>
  );
};

NavToggle.defaultProps = {
  isToggled: false
};

// Nav Item -----------------------------------------------------------------------

let NavItem = props => {
  return <li {...props}>{props.children}</li>;
};

NavItem.defaultProps = {
  className: 'nav-item'
};

// NavList -----------------------------------------------------------------------

let NavList = props => {
  return (
    <ul
      className={classNames({
        'nav-list': true,
        'nav-list-show': props.showMenu,
        'nav-list-hidden': !props.showMenu
      })}
    >
      {props.children}
    </ul>
  );
};

export default Navigation;
export { NavList, NavItem, NavToggle };
