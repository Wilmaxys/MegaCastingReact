import React from 'react';

import './Bandeau.css';

const bandeau = (props) => {
  let style = {
    backgroundColor: props.color
  }

  return (
    <div className="Bandeau" style={style}>
      <div className="container">
        {props.children}
      </div>
    </div>
)};

export default bandeau;