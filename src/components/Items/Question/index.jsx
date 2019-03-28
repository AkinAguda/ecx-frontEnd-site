import React from 'react';
import PropTypes from 'prop-types';
import Cl from './Question.module.css';
import Option from '../Option';

const Question = (props) => {
  const { questions } = props;
  return (
    <div className={Cl.container}>
      {questions.map(({
        type, option, question, answerIndex,
      }) => (
        <div key={option}>
          <h1 className={Cl.question}>{question}</h1>
          {
                option.map(opt => (
                  <div className={Cl.option}>
                    <Option option={opt} type={type} key={opt} answer={option[answerIndex]} />
                  </div>
                ))
            }
        </div>
      ))}
    </div>
  );
};

Question.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    0: PropTypes.shape({
      type: PropTypes.string.isRequired,
      option: PropTypes.arrayOf.isRequired,
      question: PropTypes.string.isRequired,
    }),
  })).isRequired,
};

export default Question;
