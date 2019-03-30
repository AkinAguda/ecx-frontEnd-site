import React from 'react';
import PropTypes from 'prop-types';
import Cl from './Question.module.css';
import Option from '../Option';
import Wrapper from '../../HOCs/Wrapper';

const Question = (props) => {
  const { questions } = props;
  return (
    <div className={Cl.container}>
      <Wrapper>
        {
         questions.map(({ type, option, question }, index) => (
           <Wrapper key={option}>
             <h1 className={Cl.question}>
               { `${index + 1}) ` }
               { question }
             </h1>
             {
                option.map(opt => (
                  <Option option={opt} type={type} key={opt} className={Cl.option} />
                ))
             }
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
