import React from 'react';
import './Section.css';

let Section = props => {
  return (
    <section {...props}>
      {props.children}
    </section>
  )
}

export default Section;