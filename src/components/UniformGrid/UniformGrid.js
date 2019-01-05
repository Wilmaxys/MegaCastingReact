import React from 'react';

import './UniformGrid.css';

const uniformGrid = (props) => {

  let elements = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
  elements = props.list.map( element => {
      return (
          <div className="col-12 col-md-4 UniformGridElement">{element}</div>
      );
  } );

  return (
    <div className="row uniformGrid">{elements}</div>
  );
}

export default uniformGrid;