import React from 'react';
import PropTypes from 'prop-types';
import Cl from './Question.module.css';
import Option from '../Option';
import SideDrawer from '../SideDrawer';
import Wrapper from '../../HOCs/Wrapper';

const Question = ({ questions }) => (
  <div className={Cl.container} id="test">
    <Wrapper>
      <SideDrawer isOpen permanent />
      <div className={Cl.rightSide}>
        {
         questions.map(({
           type, option, question, answerIndex, language,
         }, index) => (
           <Wrapper key={option}>
             <h1 className={Cl.question} key={option}>
               { `${index + 1}) ` }
               { question }
             </h1>
             <div className={Cl.options}>
               {
  option.map(opt => (
    <div className={Cl.option} key={opt}>
      <Option option={opt} type={type} key={opt} answer={option[answerIndex]} language={language} />
    </div>
  ))
}
             </div>
           </Wrapper>
         ))
         }
      </div>

    </Wrapper>
  </div>
);

Question.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      option: PropTypes.arrayOf(PropTypes.string).isRequired,
      language: PropTypes.string,
      answerIndex: PropTypes.number.isRequired,
      type: PropTypes.string,
    }),
  ).isRequired,
};

export default Question;
