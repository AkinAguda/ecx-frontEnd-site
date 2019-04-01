import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../routes';
import Cl from './SideDrawer.module.css';

const SideDrawer = ({ isOpen }) => {
  return (
    <div className={`${Cl.SideDrawer} ${isOpen ? Cl.open : Cl.close}`}>
      {
            paths.map(({ pathname, hash, name }) => (
              <Link to={pathname}
              >
                { name }
              </Link>
            ))
        }
    </div>
  );
};

export default SideDrawer;
