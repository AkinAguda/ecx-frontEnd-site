/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import './index.css';
import Routes from './components/routes';
import Logo from './components/Logo/Logo';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Logo />
        <div>
          <Routes />
        </div>
      </HashRouter>
    );
  }
}

export default App;
