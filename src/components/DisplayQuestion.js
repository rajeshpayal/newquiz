import React, { useEffect, useState } from "react";
import "../App.css";
import "./DisplayQuestion.css";
const DisplayQuestion = ({ questions }) => {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60);

  useEffect(() => {
    const timeOutId = setTimeout(() => setTime(time - 1), 1000);
    if (time < 1 || showResults) {
      clearTimeout(timeOutId);
    }
  }, [time]);

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="container">
      <h1>USA Quiz 🇺🇸</h1>
      <h2 className={time > 1 ? "correct" : "wrong"}>
        Remainimg Time: {time > 1 && time} {time <= 1 && "Time Over"}
      </h2>
      {showResults || time < 1 ? (
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        <div className="question-card">
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>
          <ul>
            {questions[currentQuestion].options.map((option, idx) => {
              return (
                <li
                  key={option.idx}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DisplayQuestion;
