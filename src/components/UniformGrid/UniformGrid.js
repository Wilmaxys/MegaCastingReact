import React from 'react';

import './UniformGrid.css';

const uniformGrid = (props) => {

  let classElement = null;

  if (props.size >= 1 && props.size <= 12){
    classElement = "col-12 UniformGridElement col-md-" + props.size;
  }
  else{
    classElement = "col-12 UniformGridElement col-md-4";
  }

  let elements = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
  elements = props.list.map( element => {
      return (
          <div className={classElement}>
            {element}
          </div>
      );
  } );

  return (
    <div className="row uniformGrid">{elements}</div>
  );
}

export default uniformGrid;