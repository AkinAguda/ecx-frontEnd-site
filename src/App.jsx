/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Routes from './components/routes';
// import Logo from './components/Logo/Logo';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* <Logo /> */}
        <div>
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
