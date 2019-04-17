/* eslint-disable quotes */
/* eslint-disable linebreak-style */
export const week1 = [
  {
    question: 'Which of these is not necessary for front-end web development?',
    option: ['Web Browser', 'Code Editor', 'A Computer', 'Anaconda'],
    answerIndex: 3,
  },
  {
    question: 'What department is tasked with turning a UI design into code?',
    option: ['UI/UX', 'Front-End', 'Dev-Ops', 'Back-End'],
    answerIndex: 1,
  },
  {
    question: 'Which of these is the odd one out?',
    option: ['PHP', 'HTML', 'JavaScript', 'CSS'],
    answerIndex: 0,
  },
  {
    question: 'Which of these is responsible for adding styles to a webpage?',
    option: ['GO', 'Python', 'CSS', 'JavaScript'],
    answerIndex: 2,
  },
  {
    question: 'The programming language of the web is?',
    option: ['Go', 'Python', 'Ruby', 'Java Script'],
    answerIndex: 3,
  },
];
export const week2 = [
  {
    question: 'What is the full meaning of HTML?',
    option: ['HYPER TEXT MARKED LANGUAGE', 'HYPER TEXT MARKUP LANGUAGE', 'HIGH TEXT MARKED LANGUAGE', 'HIGH TEXT MARKUP LANGUAGE'],
    answerIndex: 1,
  },
  {
    question: 'Which one of these represents the head of a HTML document',
    type: 'snippet',
    language: 'html',
    option: ['<h1></h1>', '<html></html>', '<head></head>', '<header></header>'],
    answerIndex: 2,
  },
  {
    question: 'Which of these is the correct way to write HTML attributes?',
    type: 'snippet',
    language: 'html',
    option: ['<h1 style"=color:red;"></h1>', '<h1 style="color:red;"></h1>', '<h1 style:"color"="red;"></h1>', '<h1 style:"color:\'red\';"></h1>'],
    answerIndex: 1,
  },
  {
    question: 'Which of these is the odd one out',
    type: 'snippet',
    language: 'html',
    option: ['<h7></h7>', '<h6></h6>', '<h8></h8>', '<h></h>'],
    answerIndex: 1,
  },
  {
    question: 'Where is the page title that shows in the browser tab defined?',
    option: ['In the head tag', 'In the body tag', 'Right above the Document type', 'In the footer'],
    answerIndex: 0,
  },
  {
    question: 'How do you define a paragraph in HTML?',
    type: 'snippet',
    language: 'html',
    option: ['<paragraph></paragraph>', '<q></q>', '<p></p>', '<p><p/>'],
    answerIndex: 2,
  },
  {
    question: 'Which of these is the correct way to write multiple HTML attributes?',
    type: 'snippet',
    language: 'html',
    option: ['<h1 style"=color:red; font-size: 40px;"></h1>', '<h1 style="color:red; font-size: 40px"></h1>', '<h1 style:"color"="red"; "font-size"="40px"></h1>', '<h1 style:"color:\'red\'; font-size:\'40px\'"></h1>'],
    answerIndex: 1,
  },
  {
    question: 'Which of these is the correct way to make a superscript?',
    type: 'snippet',
    language: 'html',
    option: ['<super></super>', '<p style="super"></p>', '<h1 style:super></h1>', '<sup></sup>'],
    answerIndex: 3,
  },
];

export const week3 = [
  {
    question: 'How would you add a quote " " to a text?',
    type: 'snippet',
    language: 'html',
    option: ['<blockquote>I am a quote</blockquote', '<p style="quote">I am a quote</p>', '<q>I am a quote</q>', '<quote></quote>'],
    answerIndex: 2,
  },
  {
    question: 'what is placed in the cite attribute in a blockquote?',
    option: ['The person who said it', 'Nothing', 'cite isn\'t used in blockquote', 'A link to the original quote'],
    answerIndex: 3,
  },
  {
    question: 'Which of these is the correct way to write an abbreviation?',
    type: 'snippet',
    language: 'html',
    option: ['<abbreviation title="World Health Organisation">WHO</abbreviation>', '<abbr title="World Health Organisation">WHO</abbr>', '<abb title="World Health Organisation">WHO</abb>', '<abbreviation name="World Health Organisation">WHO</abbreviation>'],
    answerIndex: 1,
  },
  {
    question: 'Why is it important to comment your code?',
    option: ['To make your code more understandable', 'To make your code run faster', 'To make your code cleaner', 'To speed up code execution'],
    answerIndex: 0,
  },
  {
    question: 'What is the maximum value any of the colors can have in rgb(10, 20, 30)',
    option: ['100', '225', '125', '255'],
    answerIndex: 3,
  },
  {
    question: 'What does the "a" in "rgba" define?',
    option: ['border', 'hue', 'opacity', 'light intensity'],
    answerIndex: 2,
  },
  {
    question: 'Which of these is the correct way to make a red heading with a border round it?',
    type: 'snippet',
    language: 'css',
    option: ['h1 {color: red;\nborder: 1px solid}', 'h1 {color: red;\nborder: solid red}', 'h1 {color: red;\nborder-right: solid red}'],
    answerIndex: 0,
  },
];

export const week4 = [
  {
    question: 'What is the full meaning of CSS?',
    option: ['Comparable Style Selectors', 'Colorful Seperate Styles', 'Cascading Style Sheets', 'Creative Style Selectors'],
    answerIndex: 2,
  },
  {
    question: 'What is the correct way to link a stylesheet in the html?',
    type: 'snippet',
    language: 'html',
    option: ['<link rel="stylesheet" href="style.css">', '<style rel="stylesheet" href="style.css">',
      '<link to="index.html" rel="stylesheet" href="style.css" type="external">', '<a src="style.css">'],
    answerIndex: 0,
  },
  {
    question: 'Which of these selectors will style all paragraphs to have a font color of red ?',
    type: 'snippet',
    language: 'css',
    option: ['p \n{\n  font-color:red; \n}', 'para \n{\n  text-color:red; \n}', 'p \n{\n  color:red; \n}', 'paragraph \n{\n  font-color:red; \n}'],
    answerIndex: 2,
  },
  {
    question: 'Which of the following has the highest specificity?',
    type: 'snippet',
    language: 'css',
    option: ['p { \n  /*code goes here*/\n }', 'p.red { \n  /*code goes here*/\n }', '#red{ \n  /*code goes here*/\n }', 'p#red{ \n  /*code goes here*/\n }'],
    answerIndex: 3,
  },
  {
    question: 'Which of these will make an element take up the full size available?',
    type: 'snippet',
    language: 'css',
    option: ['display:full;', 'display:full-size;', 'display:block;', 'display:100%;'],
    answerIndex: 2,
  },
  {
    question: 'What is the corrrect order for styling links?',
    type: 'snippet',
    language: 'css',
    option: [`a:link {
      color: red;
  }
  a:visited {
      color: green;
  }
  a:hover {
      color: hotpink;
  }
  
  a:active {
      color: blue;
  }`,
    `a:active {
    color: red;
}
a:visited {
    color: green;
}
a:hover {
    color: hotpink;
}

a:link {
    color: blue;
}`,
    `a:active {
  color: red;
}
a:visited {
  color: green;
}
a:link {
  color: hotpink;
}

a:hover {
  color: blue;
}`,
    `a:visited {
  color: red;
}
a:link {
  color: green;
}
a:hover {
  color: hotpink;
}

a:active {
  color: blue;
}`,
    ],
    answerIndex: 0,
  },
  {
    question: 'CSS grows quickly',
    option: ['Nay', 'Yay'],
    answerIndex: 1,
  },
];
