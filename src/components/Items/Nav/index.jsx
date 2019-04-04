/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Cl from './Nav.module.css';
import Logo from '../../../assets/brand.svg';

class Nav extends Component {
  state={
    isOpen: false,
  }

  toggleSide = () => {
    const { isOpen } = this.state;
    const { open, close } = this.props;
    if (isOpen) {
      close();
      this.setState({
        isOpen: false,
      });
    } else {
      open();
      this.setState({
        isOpen: true,
      });
    }
  }

  render() {
    return (
      <div className={Cl.header}>
        <img src={Logo} alt="logo" className={Cl.Logo} />
        <div className={Cl.hamBurger} onClick={this.toggleSide} onKeyPress={this.toggleSide} tabIndex={0} role="button">
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}
export default Nav;
