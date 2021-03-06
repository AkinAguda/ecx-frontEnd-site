/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Cl from './Option.module.css';

class Option extends Component {
  constructor() {
    super();
    this.state = {
      circleClass: Cl.circle,
      innerClass: Cl.inner,
      containerCLass: Cl.container,
      snippetClass: Cl.containerSnippet,
    };
  }

    selected = (option, answer) => {
      if (option !== answer) {
        this.setState({
          circleClass: `${Cl.circle} ${Cl.slim}`,
          innerClass: `${Cl.inner} ${Cl.incInner}`,
          containerCLass: `${Cl.container} ${Cl.false}`,
          snippetClass: `${Cl.containerSnippet} ${Cl.false}`,
        });
      } else {
        this.setState({
          circleClass: `${Cl.circle} ${Cl.slim}`,
          innerClass: `${Cl.inner} ${Cl.incInner}`,
          containerCLass: `${Cl.container} ${Cl.true}`,
          snippetClass: `${Cl.containerSnippet} ${Cl.true}`,
        });
      }
    }

    render() {
      const {
        circleClass, innerClass, containerCLass, snippetClass,
      } = this.state;
      const {
        option, type = 'text', answer, language,
      } = this.props;
      return (
        <div>
          {
                type === 'text'
                  ? (
                    <div className={containerCLass} onClick={this.selected.bind(this, option, answer)} onKeyPress={this.selected} role="button" tabIndex={0}>
                      <div className={circleClass}>
                        <div className={innerClass} />
                      </div>
                      <div className={Cl.option}>{option}</div>
                    </div>
                  )
                  : type === 'snippet'
                    && (
                      <SyntaxHighlighter
                        className={snippetClass}
                        language={language}
                        showLineNumbers
                        style={okaidia}
                        onClick={() => this.selected(option, answer)}
                      >
                        {option}
                      </SyntaxHighlighter>
                    )
            }
        </div>
      );
    }
}
Option.propTypes = {
  option: PropTypes.string.isRequired,
  type: PropTypes.string,
  answer: PropTypes.string.isRequired,
  language: PropTypes.string,
};
Option.defaultProps = {
  type: 'text',
  language: null,
};

export default Option;
