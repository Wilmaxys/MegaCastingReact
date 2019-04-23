import React from 'react';
import Barre from '../Barre/Barre'

import './Title.css';

const title = (props) => {
  let align = null;

  if(props.align === "center"){
    align = "justify-content-center row title"
  }
  else{
    align = "row title"
  }

  let styleTitre = {
    textAlign: props.align,
  }

  return (
    <div className={align} style={styleTitre}>
      <div className="col-12 titre">{props.children}</div>
      <div className="col-6 col-md-2 barreTitle">
        <Barre fade={props.fade} color={props.color}/>
      </div>
    </div>
  );
}

export default title;