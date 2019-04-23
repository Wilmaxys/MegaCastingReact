import React from 'react';
import { NavLink } from 'react-router-dom';

import './Button.css';


const button = (props) => {

  let text = "LEARN MORE";

  if(props.children !== undefined && props.children !== undefined){
    text = props.children;
  }

  return (<NavLink className="asideButton col-md-2" to={props.to}>{text}</NavLink>);
}

export default button;