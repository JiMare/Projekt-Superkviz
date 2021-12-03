import React from "react";
import { Link } from "react-router-dom";

export const Quiz = ({ data, reset }) => {

  const handleClick = () => {
    reset();
  } 

  return (
    <div className="quiz-item">
      <img className="quiz-item__image" src={data.image} alt="#" />
      <div className="quiz-item__content">
        <h2 className="quiz-item__title">{data.title}</h2>
        <p className="quiz-item__questions">{data.questions} otázek</p>
        <Link to={`/list/${data.id}`} className="quiz-item__link" onClick={handleClick}>
          Spustit kvíz
        </Link>
      </div>
    </div>
  );
};
