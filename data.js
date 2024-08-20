const data = [
  {
    id: 1,
    question: "JavaScript is an _______ language.",
    options: ["Object-Oriented", "Object-Based", "Procedural"],
  },
  {
    id: 2,
    question:
      "Following methods can be used to display data in some form using JavaScript.",
    options: ["document.write()", "console.log()", "window.alert()"],
  },
  {
    id: 3,
    question:
      "When an operator value is NULL, the typeof returned by the unary operator is:",
    options: ["Boolean", "Undefined", "Object"],
  },
  {
    id: 4,
    question: "What does the toString() method return?",
    options: ["Return Object", "Return String", "Return Integer"],
  },
  {
    id: 5,
    question:
      "Which function is used to serialize an object into a JSON string?",
    options: ["stringify()", "parse()", "convert()"],
  },
  {
    id: 6,
    question: "Which of the following is a JavaScript framework?",
    options: ["Django", "React", "Flask"],
  },
  {
    id: 7,
    question:
      "Which of the following is used to handle asynchronous operations in JavaScript?",
    options: ["Promises", "Callbacks", "Both"],
  },
  {
    id: 8,
    question: "Which of the following is true about JavaScript?",
    options: [
      "JavaScript is a loosely typed language.",
      "JavaScript is a strongly typed language.",
      "JavaScript does not support object-oriented programming.",
    ],
  },
  {
    id: 9,
    question:
      "Which operator is used to compare both value and type in JavaScript?",
    options: ["==", "===", "="],
  },
  {
    id: 10,
    question: "How can you create an array in JavaScript?",
    options: ["var arr = [];", "var arr = new Array();", "Both of the above"],
  },
];

const answers = [0, 1, 2, 1, 0, 1, 2, 0, 1, 2];

module.exports = { data, answers };
