import React from 'react';

import './Box.css';

const box = (props) => {
  let style = {
    backgroundColor: props.color,
    color: props.textColor
  }

  let className = "Box col-12 " + props.className;

  return (<div className={className} style={style}>{props.children}</div>)
}

export default box;