/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { NavLink } from 'react-router-dom';
// import Wrapper from '../HOCs/Wrapper';
import classes from './index.module.css';

const Home = () => (
  <div className={classes.body}>
    {/* <div className={classes.Container}>
      <h1>Home</h1>
    </div>
    <div className={classes.Body}>
      <p>Welcome to the quiz website for the ECX Front End Track.
        <br />This is just a way to revise what
        you have learnt so far.
      </p>
      <NavLink to="/week-one">Week1</NavLink>
      <br />
      <NavLink to="/week-two">Week2</NavLink>
    </div> */}
    <div className={classes.Body}>
      <p>
      Welcome to the quiz website for the ECX Front End Track.
        <br />This is just a way to revise what
        you have learnt so far.
      </p>
    </div>
    <div className={classes.base}>
      <div className={classes.tests}>
        <NavLink to="/week-one">Week 1</NavLink>
        <br />
        <NavLink to="/week-two">Week 2</NavLink>
      </div>
    </div>
    <footer>Built by Irene and Akin</footer>
  </div>
);

export default Home;
