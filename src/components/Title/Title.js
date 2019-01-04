import React from 'react';

import './Title.css';

const title = (props) => {

  return (
    <div className="row justify-content-center title">
      <div className="col-12 titre">{props.children}</div>
      <div className="col-6 col-md-2 barre">
      </div>
    </div>
  );
}

export default title;