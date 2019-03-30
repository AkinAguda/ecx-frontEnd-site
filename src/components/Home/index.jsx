/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Wrapper from '../HOCs/Wrapper';
import classes from './index.module.css';

const Home = () => (
  <Wrapper>
    <div className={classes.Container}>
      <h1>Home</h1>
    </div>
    <div className={classes.Body}>
      <p>Welcome to the quiz website for the ECX Front End Track.
        <br />This is just a way to revise what
        you have learnt so far.
      </p>
    </div>
  </Wrapper>

);

export default Home;
