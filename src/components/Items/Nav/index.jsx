/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Cl from './Nav.module.css';
import Logo from '../../../assets/brand.png';

class Nav extends Component {
  render() {
    return (
      <div className={Cl.header}>
        <img src={Logo} alt="logo" className={Cl.Logo} />
        <div className={Cl.hamBurger}>
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}
export default Nav;
