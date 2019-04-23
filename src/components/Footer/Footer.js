import React from 'react';
import Bandeau from '../Bandeau/Bandeau';

import './Footer.css'
import logo from '../../assets/img/logo/32x32.png';

const footer = (props) => {

  return (
    <div className="Footer">
      <Bandeau color="#1F3040">
        <div className="container">
          <div className="logo">
            <div className="text ">MegaCasting</div>
            <div className="image"><img src={logo} alt="img" /></div>
          </div>
          {/* {props.children} */}
        </div>
      </Bandeau>
    </div>
  );
}

export default footer;