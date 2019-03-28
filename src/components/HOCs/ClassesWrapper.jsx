/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Wrapper from './Wrapper';

const classesWrapper = (WrappedComponent, className) => class extends Component {
  render() {
    return (
      <div className={className}>
        <Wrapper {...this.props} />
      </div>
    );
  }
};

export default classesWrapper;
