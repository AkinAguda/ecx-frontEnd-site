import React from 'react';
import PropTypes from 'prop-types';
import Cl from './Question.module.css';
import Option from '../Option';
import SideDrawer from '../SideDrawer';
import Wrapper from '../../HOCs/Wrapper';

const Question = (props) => {
  const { questions } = props;
  return (
    <div className={Cl.container} id="test">
      <Wrapper>
        {/* <div className={Cl.drawer}> */}
        <SideDrawer isOpen permanent />
        {/* </div> */}

        <div className={Cl.rightSide}>
          {
         questions.map(({
           type, option, question, answerIndex, language,
         }, index) => (
           <Wrapper>
             <h1 className={Cl.question} key={option}>
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
        </div>

      </Wrapper>
    </div>
  );
};

Question.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    0: PropTypes.shape({
      type: PropTypes.string,
      option: PropTypes.arrayOf.isRequired,
      question: PropTypes.string.isRequired,
    }),
  })).isRequired,
};

export default Question;
