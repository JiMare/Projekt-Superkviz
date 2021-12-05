import React, { useEffect } from "react";

export const AnswerResult = ({ question, answer, increaseRightAnswers }) => {
  const correct = question.correctAnswer === answer;

  useEffect(() => {
    if (correct) {
      increaseRightAnswers();
    }
  }, []);

  return (
    <div className="result">
      <img
        className="result__icon"
        src={
          correct ? "assets/images/correct.svg" : "assets/images/incorrect.svg"
        }
        alt="špatně"
      />

      <div className="result__content">
        <h3 className="result__title">{question.id}. {question.title}</h3>
        <p className="result__answer">
          Tvoje odpověď: {question.answers[answer]}
        </p>
        {!correct && (
          <p className="result__answer result__answer--correct">
            Správná odpověď: {question.answers[question.correctAnswer]}
          </p>
        )}
      </div>
    </div>
  );
};
