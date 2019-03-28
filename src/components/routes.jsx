import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import weekOne from './EcxTests/week1';
import weekTwo from './EcxTests/week2';

const Routes = () => (
  <div>
    <Route path="/" exact component={Home} />
    <Route path="/week-one" component={weekOne} />
    <Route path="/week-two" component={weekTwo} />
  </div>
);

export default Routes;
