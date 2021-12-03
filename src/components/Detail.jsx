import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const Detail = ({
  rememberAnswer,
  pickQuizDetail,
  detail
}) => {
  const { id } = useParams();
  const [questionNum, setQuestionNum] = useState(0);

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/Czechitas-React-podklady/superkviz-api/main/quiz/${id}.json`
    )
      .then((response) => response.json())
      .then((data) => pickQuizDetail(data));
  }, []);

  const showNextQuestion = () => {
    if (questionNum + 1 < detail?.questions.length) {
      setQuestionNum((prev) => prev + 1);
    }
  };

  const handleClick = (answer) => {
    showNextQuestion();
    rememberAnswer(answer);
  };

  return (
    <div className="question">
      <p className="question__number">
        Otázka {questionNum + 1} / {detail?.questions.length}
      </p>

      <h2 className="question__title">
        {detail?.questions[questionNum].title}
      </h2>

      <div className="question__content">
        <img
          className="question__image"
          src={detail?.questions[questionNum].image}
          alt="Ilustrační obrázek"
        />

        <div className="question__answers">
          <Link
            to={
              questionNum + 1 < detail?.questions.length
                ? `/list/${id}`
                : "/result"
            }
            className="question__answer"
            onClick={() => handleClick(0)}
          >
            {detail?.questions[questionNum].answers[0]}
          </Link>
          <Link
            to={
              questionNum + 1 < detail?.questions.length
                ? `/list/${id}`
                : "/result"
            }
            className="question__answer"
            onClick={() => handleClick(1)}
          >
            {detail?.questions[questionNum].answers[1]}
          </Link>
          <Link
            to={
              questionNum + 1 < detail?.questions.length
                ? `/list/${id}`
                : "/result"
            }
            className="question__answer"
            onClick={() => handleClick(2)}
          >
            {detail?.questions[questionNum].answers[2]}
          </Link>
        </div>
      </div>
    </div>
  );
};
