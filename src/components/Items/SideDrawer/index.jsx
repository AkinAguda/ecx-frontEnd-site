import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../routes';
import Cl from './SideDrawer.module.css';

const SideDrawer = ({ isOpen, close }) => {
  return (
    <div className={`${Cl.SideDrawer} ${isOpen ? Cl.open : Cl.close}`}>
      <ul>
        {
              paths.map(({ pathname, hash, name }) => (
                <li><Link to={{pathname: pathname, hash: hash}} className={ name === 'home' ? Cl.home : Cl.navLink} onClick={close}>{ name }</Link></li>
              ))
          }
      </ul>
    </div>
  );
};

export default SideDrawer;
