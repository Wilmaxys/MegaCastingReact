import React from 'react';

import './Barre.css';

const barre = (props) => {

  let style = {
    background: 'linear-gradient(to right,'+props.fade+', '+props.color+', '+props.color+', '+props.color+', '+props.color+', '+props.color+', '+props.fade+')'
  }

  return (<div className="col-12 Barre" style={style}></div>);
}

export default barre;