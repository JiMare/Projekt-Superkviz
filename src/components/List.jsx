import React, { useState, useEffect } from "react";
import { Quiz } from "./Quiz";

export const List = ({reset}) => {
  const [list, setList] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Czechitas-React-podklady/superkviz-api/main/quizes.json"
    )
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);

  return (
    <>
      <div className="quiz-list">
        {list &&
          list.map((quiz) => <Quiz key={quiz.id} data={quiz} reset={reset} />)}
      </div>
    </>
  );
};
