import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../routes';
import Cl from './SideDrawer.module.css';

const SideDrawer = ({ isOpen, close, permanent = false }) => {
  return (
    <div className={`${Cl.SideDrawer} ${isOpen ? Cl.open : Cl.close} ${permanent ? Cl.permanent : ''}`}>
      <ul>
        {
              paths.map(({ pathname, hash, name }) => (
                <li><Link to={{ pathname, hash }} className={name === 'home' ? Cl.home : Cl.navLink} onClick={close}>{ name }</Link></li>
              ))
          }
      </ul>
    </div>
  );
};

export default SideDrawer;
