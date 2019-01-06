import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';
import logo from '../../assets/img/logo/32x32.png';
import ResponsiveMenu from 'react-responsive-navbar';
import Aux from '../../hoc/AuxJs';

const navbar = (props) => {
  
  let menuLogo = <Aux><div className="image"><img src={logo} alt="img" /></div></Aux>;

  let openMenu = <Aux> <div className="logoNav">{menuLogo}</div>
    <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="30" width="30" viewBox="0 0 40 40" ><g>
    <path d="m37.3 30v2.9q0 0.5-0.4 1t-1 0.4h-31.5q-0.6 0-1-0.4t-0.4-1v-2.9q0-0.6 0.4-1t1-0.4h31.5q0.5 0 1 0.4t0.4 1z m0-11.4v2.8q0 0.6-0.4 1t-1 0.5h-31.5q-0.6 0-1-0.5t-0.4-1v-2.8q0-0.6 0.4-1t1-0.5h31.5q0.5 0 1 0.5t0.4 1z m0-11.5v2.9q0 0.6-0.4 1t-1 0.4h-31.5q-0.6 0-1-0.4t-0.4-1v-2.9q0-0.5 0.4-1t1-0.4h31.5q0.5 0 1 0.4t0.4 1z">
    </path></g></svg></Aux>;

  return ( <ResponsiveMenu
    menuOpenButton={openMenu}
    menuCloseButton={openMenu}
    changeMenuOn="500px"
    largeMenuClassName="large-menu-classname"
    smallMenuClassName="small-menu-classname"
    menu={

      <div className="container">
        <div className="row navbar">
          <div className="col-12 col-md-6 logo">
            <div className="text">MegaCasting</div>
            {menuLogo}
          </div>
          <div className="col-12 col-md-6 menu">
            <div className="menuButton">
              <NavLink
                to="/"
                exact
                activeClassName="active">
                Home</NavLink>
            </div>
            <div className="menuButton">
              <NavLink
                to="/advices/"
                exact
                activeClassName="active">
                Conseils</NavLink>
            </div>
            <div className="menuButton">
              <NavLink
                to="/contact/"
                exact
                activeClassName="active">
                Contact</NavLink>
            </div>
            <div className="menuButton specialButton">
              <NavLink
                to="/offers/"
                exact
                activeClassName="active">
                Offres</NavLink>
            </div>
          </div>
        </div>
      </div>
    }
  />
)};

export default navbar;