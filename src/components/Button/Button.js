import React from 'react';
import { NavLink } from 'react-router-dom';

import './Button.css';

const button = (props) => {
  return (<NavLink className="asideButton col-md-2" to={props.to}>LEARN MORE</NavLink>);
}

export default button;