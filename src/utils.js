const snippet1 = `
import React, { Component } from 'react';
import Header from './components/Header';
import Question from './components/Question/Question';
class App extends Component {
    render() {
    return (
        <div className="App">
        <Header />
        <Question />
        </div>
    );
    }
}

export default App;`;
export const week1 = [
  {
    question: 'Is this JSX?',
    type: 'snippet',
    option: [snippet1],
    answerIndex: 0,
  },
  {
    question: 'What is the Full meaning of HTML?',
    option: ['HYPERTEXT MARKUP LANGUAGE', 'HYPERTEXT MAKE LANGUAGE'],
    answerIndex: 0,
  },
];

export const week2 = [
  {
    question: 'Is this me?',
    option: ['one', 'two'],
    answerIndex: 1,
  },
];
