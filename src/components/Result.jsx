import React from "react";
import { AnswerResult } from "./AnswerResult";

export const Result = ({ answers, detail, increaseRightAnswers, rightAnswers }) => {

  const percent = Math.round((rightAnswers / detail?.questions.length) * 100);

  return (
    <div className="evaluation">
      <h2 className="evaluation__title">Tvoje hodnocení</h2>

      <div className="evaluation__content">
        <div className="results">
          {detail?.questions.map((question) => (
            <AnswerResult
              key={question.id}
              question={question}
              answer={answers[question.id - 1]}
              increaseRightAnswers={increaseRightAnswers}
            />
          ))}

          <div className="results__count">
            Správně máš {rightAnswers} z {detail?.questions.length} otázek.
          </div>
        </div>

        <div className="success-rate">{percent} %</div>
      </div>
    </div>
  );
};
