import React from 'react';

import './Box.css';

const box = (props) => {
  let style = {
    backgroundColor: props.color,
    color: props.textColor
  }

  return (<div className="Box col-12" style={style}>{props.children}</div>)
}

export default box;