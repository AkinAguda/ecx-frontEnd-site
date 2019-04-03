import React from 'react';
import PropTypes from 'prop-types';
import Cl from './Question.module.css';
import Option from '../Option';
import Wrapper from '../../HOCs/Wrapper';

const Question = (props) => {
  const { questions } = props;
  return (
    <div className={Cl.container} id="test">
      <Wrapper>
        {
         questions.map(({
           type, option, question, answerIndex, language,
         }, index) => (
           <Wrapper key={option}>
             <h1 className={Cl.question}>
               { `${index + 1}) ` }
               { question }
             </h1>
             <div className={Cl.options}>
               {
  option.map(opt => (
    <div className={Cl.option}>
      <Option option={opt} type={type} key={opt} answer={option[answerIndex]} language={language} />
    </div>
  ))
}
             </div>
           </Wrapper>
         ))
         }
      </Wrapper>
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
