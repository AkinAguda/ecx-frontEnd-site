import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Home</h1>
    <Link to="/week-one">Week1</Link>
    <br />
    <Link to="/week-two">Week2</Link>
  </div>
);

export default Home;
