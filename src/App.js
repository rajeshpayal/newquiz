import React, { useState } from "react";

import "./App.css";

import DisplayQuestion from "./components/DisplayQuestion";

const dummy_questions = [
  {
    topic: "GK Knowledge",
    level: "Beginner",
    perQuestionScore: 5,
    questions: [
      {
        text: "What is the capital of America?",
        options: [
          { text: "New York City", isCorrect: false },
          { text: "Boston", isCorrect: false },
          { text: "Santa Fe", isCorrect: false },
          { text: "Washington DC", isCorrect: true },
        ],
      },
      {
        text: "What year was the Constitution of America written?",
        options: [
          { text: "1787", isCorrect: true },
          { text: "1776", isCorrect: false },
          { text: "1774", isCorrect: false },
          { text: "1826", isCorrect: false },
        ],
      },
      {
        text: "Who was the second president of the US?",
        options: [
          { text: "John Adams", isCorrect: true },
          { text: "Paul Revere", isCorrect: false },
          { text: "Thomas Jefferson", isCorrect: false },
          { text: "Benjamin Franklin", isCorrect: false },
        ],
      },
      {
        text: "What is the largest state in the US?",
        options: [
          { text: "California", isCorrect: false },
          { text: "Alaska", isCorrect: true },
          { text: "Texas", isCorrect: false },
          { text: "Montana", isCorrect: false },
        ],
      },
      {
        text: "Which of the following countries DO NOT border the US?",
        options: [
          { text: "Canada", isCorrect: false },
          { text: "Russia", isCorrect: true },
          { text: "Cuba", isCorrect: true },
          { text: "Mexico", isCorrect: false },
        ],
      },
    ],
  },
];
function App() {
  const [selectQuiz, setSelectedQuiz] = useState(0);
  const [takeQuiz, setTakeQuiz] = useState(false);
  const takeQuizHandler = () => {
    if (
      window.confirm(
        "Are you sure you want to take the quiz , remember once you have taken the quiz you can quit"
      )
    ) {
      setTakeQuiz(!takeQuiz);
    } else {
      return;
    }
  };
  return (
    <>
      <div className="nine">
        <h1>
          {dummy_questions[selectQuiz].topic}
          <span>{dummy_questions[selectQuiz].level}</span>
        </h1>
      </div>

      {!takeQuiz && (
        <div>
          <div className="wrap">
            <h2>Quiz Details</h2>
            <p>Passing Percentages : 80</p>
            <p>
              No of Questions : {dummy_questions[selectQuiz].questions.length}
            </p>
            <p>Time : 1 min</p>
          </div>
          <button onClick={takeQuizHandler}>Take Quiz</button>
        </div>
      )}
      {takeQuiz && <DisplayQuestion questions={dummy_questions[0].questions} />}
    </>
  );
}

export default App;
