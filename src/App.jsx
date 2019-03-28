/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
// import Cl from './index.module.css';
import './index.css';
import Question from './components/Items/Question';
import { week1 } from './utils';

class App extends Component {
  render() {
    return (
      <Question questions={week1} />
    );
  }
}

export default App;
