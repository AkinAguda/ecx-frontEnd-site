import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import weekOne from './EcxTests/week1';
import weekTwo from './EcxTests/week2';
import classes from './routes.module.css';

const Routes = () => (
  <div className={classes.General}>
    <Route path="/" exact component={Home} />
    <Route path="/week-one" component={weekOne} />
    <Route path="/week-two" component={weekTwo} />
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
];

export default Routes;
