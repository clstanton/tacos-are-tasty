var questionAnswer1 = document.getElementById("#question-answer-1");
var questionAnswer2 = document.getElementById("#question-answer-2");
var questionAnswer3 = document.getElementById("#question-answer-3");
var questionAnswer4 = document.getElementById("#question-answer-4");
var questionAnswer5 = document.getElementById("#question-answer-5");

var answerButtonEl = document.getElementByClassName(".answer-button");

var quizFlow = function() {
  // array
  var quizBlockEl = document.getElementByClassName(".quiz-block");
  quizBlockEl = [
    {q: "questionAnswer1", a: "3"=true, a: "1"=false, a: "2"=false, a: "4"=false},
    {q: "questionAnswer2", a: "3"=true, a: "1"=false, a: "2"=false, a: "4"=false},
    {q: "questionAnswer3", a: "4"=true, a: "1"=false, a: "2"=false, a: "3"=false},
    {q: "questionAnswer4", a: "3"=true, a: "1"=false, a: "2"=false, a: "4"=false},
    {q: "questionAnswer5", a: "4"=true, a: "1"=false, a: "2"=false, a: "3"=false}
  ];

  // start w/ score of 0
  var score = 0;

  // loop through questions
  for (var i = 0; i < quizBlockEl.length; i++) {
    // display current question
    var answer = confirm(quizBlockEl[i].qa);

    // compare answers
    if (
      (answer === true && quizBlockEl[i].a === true) || (asnwer === false && quizBlockEl[i].a === false)
    ) {
      // Increase score
      score++;
      alert("Correct!");
    } else {
      alert("Wrong!");
    }
  }
}
quizFlow();