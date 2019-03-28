/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cl from './Option.module.css';

class Option extends Component {
  constructor() {
    super();
    this.state = {
      circleClass: Cl.circle,
      innerClass: Cl.inner,
      containerCLass: Cl.container,
    };
  }

    selected = (arg, answer) => {
      if (arg !== answer) {
        this.setState({
          circleClass: `${Cl.circle} ${Cl.slim}`,
          innerClass: `${Cl.inner} ${Cl.incInner}`,
          containerCLass: `${Cl.container} ${Cl.false}`,
        });
      } else {
        this.setState({
          circleClass: `${Cl.circle} ${Cl.slim}`,
          innerClass: `${Cl.inner} ${Cl.incInner}`,
          containerCLass: `${Cl.container} ${Cl.true}`,
        });
      }
      // if (active) {
      //   this.setState({
      //     active: false,
      //     circleClass: Cl.circle,
      //     innerClass: Cl.inner,
      //     containerCLass: Cl.container,
      //   });
      // } else {
      //   this.setState({
      //     active: true,
      //     circleClass: `${Cl.circle} ${Cl.slim}`,
      //     innerClass: `${Cl.inner} ${Cl.incInner}`,
      //     containerCLass: `${Cl.container} ${Cl.selected}`,
      //   });
      // }
    }

    render() {
      const { circleClass, innerClass, containerCLass } = this.state;
      const { option, type = 'text', answer } = this.props;
      return (
        <div>
          {
                type === 'text'
                  ? (
                    <div className={Cl.inlineBlock}>
                      <div className={containerCLass}>
                        <div className={circleClass}>
                          <div className={innerClass} />
                        </div>
                        <div className={Cl.option} onClick={() => this.selected(option, answer)} onKeyPress={this.selected} role="button" tabIndex={0}>{option}</div>
                      </div>
                    </div>
                  )
                  : type === 'snippet'
                    ? (
                      <div className={Cl.containerSnippet}>
                        <pre>
                          <code>
                            {option}
                          </code>
                        </pre>
                      </div>
                    )
                    : ''
            }
        </div>
      );
    }
}
Option.propTypes = {
  option: PropTypes.arrayOf.isRequired,
  type: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Option;
