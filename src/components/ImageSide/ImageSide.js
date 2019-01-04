import React from 'react';

import './ImageSide.css';

const imageSide = (props) => {
  return (
    <div className="imageSide container">
      <div className="row">
        <div className="col-12 col-md-8">
          {props.children}
        </div>
        <div className="col-12 col-md-4 image">
          <img className="img-fluid" src={props.image} />
        </div>
      </div>
    </div>

  );
}

export default imageSide;