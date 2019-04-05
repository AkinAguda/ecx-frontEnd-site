/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import classes from './index.module.css';

const Home = () => (
  <div className={classes.body}>
    <div className={classes.logo}>
      <Logo />
    </div>
    <div className={classes.Body}>
      <p>
      Welcome to the quiz website for the ECX Front End Track.
        <br />This is just a way to revise what
        you have learnt so far.
      </p>
    </div>
    <div className={classes.base}>
      <div className={classes.tests}>
        <NavLink to="/week-one" exact>Week 1</NavLink>
        <br />
        <NavLink to="/week-two" exact>Week 2</NavLink>
        <NavLink to="/week-three" exact>Week 3</NavLink>
      </div>
    </div>
    <footer>Built by Irene and Akin</footer>
  </div>
);

export default Home;
