import React from 'react';
import classes from './Logo.module.css';
import Logo from '../../assets/brand.png';

const logo = () => (
  <div className={classes.ImgContainer}>
    <img className={classes.Image} src={Logo} alt="ECX Logo" />
  </div>
);


export default logo;
