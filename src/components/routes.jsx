import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import weekOne from './EcxTests/week1';
import weekTwo from './EcxTests/week2';
import weekThree from './EcxTests/week3';
import weekFour from './EcxTests/week4';
import classes from './routes.module.css';

const Routes = () => (
  <div className={classes.General}>
    <Route path="/" exact component={Home} />
    <Route path="/week-one" component={weekOne} />
    <Route path="/week-two" component={weekTwo} />
    <Route path="/week-three" component={weekThree} />
    <Route path="/week-four" component={weekFour} />
  </div>
);

export const paths = [{
  pathname: '/',
  name: 'home',
},
{
  pathname: '/week-one',
  hash: '#test',
  name: 'week one',

},
{
  pathname: '/week-two',
  hash: '#test',
  name: 'week two',
},
{
  pathname: '/week-three',
  hash: '#test',
  name: 'week three',
},
];

export default Routes;
