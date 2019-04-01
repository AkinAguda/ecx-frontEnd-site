import React from 'react';
import Header from '../Items/Nav';
import Question from '../Items/Question';
import Wrapper from '../HOCs/Wrapper';
import { week1 } from '../../utils';

const weekOne = () => (
  <Wrapper>
    <Header />
    <Question questions={week1} />
  </Wrapper>
);

export default weekOne;
