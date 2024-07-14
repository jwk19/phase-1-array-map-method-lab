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
  'what is JSONP?',
];

function capitalize(word) {
  // Check if the word should be in its original form (e.g., camelCase or specific acronyms)
  const specialCases = ["OO", "API", "NaN", "JSONP", "stopPropagation", "preventDefault"];
  if (specialCases.includes(word)) {
    return word;
  }
  
  // Capitalize the first letter of the word and keep the rest in lowercase
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function titleCased() {
  return tutorials.map((tutorial) => {
    const words = tutorial.split(" ");
    const capitalizedWords = words.map(capitalize);
    return capitalizedWords.join(" ");
  });
}

console.log(titleCased());
