import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import weekOne from './EcxTests/week1';

const Routes = () => (
  <div>
    <Route path="/" exact component={Home} />
    <Route path="/week-one" component={weekOne} />
  </div>
);

export default Routes;
