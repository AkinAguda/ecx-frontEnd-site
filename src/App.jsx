/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Routes from './components/routes';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
