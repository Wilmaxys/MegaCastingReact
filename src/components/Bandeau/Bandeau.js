import React from 'react';

import './Bandeau.css';

const bandeau = (props) => {
  let style = {
    backgroundColor: props.color
  }

  return (
    <div className="Bandeau" style={style}>
      <div className="container">
        <div className="textBandeau">
          {props.children}
        </div>
      </div>
    </div>
)};

export default bandeau;