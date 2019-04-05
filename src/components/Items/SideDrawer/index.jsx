import React from 'react';
import { NavLink } from 'react-router-dom';
import { paths } from '../../routes';
import Cl from './SideDrawer.module.css';


const SideDrawer = ({ isOpen, close, permanent = false }) => {
  return (
    <div className={`${Cl.SideDrawer} ${isOpen ? Cl.open : Cl.close} ${permanent ? Cl.permanent : ''}`}>
      <ul>
        {
              paths.map(({ pathname, hash, name }) => (
                <li key={name}>
                  <NavLink to={{ pathname, hash }} className={name === 'home' ? Cl.home : Cl.navLink} onClick={close} exact>
                    { name }
                  </NavLink>
                </li>

              ))
          }
      </ul>
    </div>
  );
};

export default SideDrawer;
