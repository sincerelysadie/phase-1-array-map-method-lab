const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map (tutorial => {
    const wordArray = (tutorial.split(" "))
      for (let w = 0; w < wordArray.length; w++) {
        wordArray[w] = wordArray[w].charAt(0).toUpperCase() + wordArray[w].slice(1);
      };
      return wordArray.join(" ");
  });
};


