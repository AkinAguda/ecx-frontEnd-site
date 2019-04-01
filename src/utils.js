/* eslint-disable linebreak-style */
const snippet1 = '<h1>Hey there</h1>';
const snippet2 = '<head>Hey there</head>';
const snippet3 = '<p>Hello friend</p>';
const snippet4 = '<ul>Hey ECXM</ul>';

export const week1 = [
  {
    question: 'Which one of these is a header?',
    type: 'snippet',
    answerIndex: 0,
    language: 'html',
    option: [snippet1, snippet2, snippet3, snippet4],
    // we still need the options
  },
  {
    question: 'What is the Full meaning of HTML?',
    option: ['HYPERTEXT MARKUP LANGUAGE', 'HYPERTEXT MAKE LANGUAGE', 'HYPERTEXT MAKEUP LANGUAGE', 'HYPEDTEXT MARKUP LANGUAGE'],
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
