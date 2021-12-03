import React, { useState } from "react";
import { render } from "react-dom";
import "./style.css";
import { QuizFooter } from "./components/QuizFooter";
import { QuizHeader } from "./components/QuizHeader";
import { Home } from "./components/Home";
import { Leaderboard } from "./components/Leaderboard";
import { List } from "./components/List";
import { Detail } from "./components/Detail";
import { Result } from "./components/Result";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/*
      Tady bude tvůj Superkvíz :)

      - HTML/CSS podklady máš ve složce /html-vzor
      - vyzobej si ze souborů HTML a CSS pro svoje komponenty
      - aplikace má nejméně 4 stránky (úvod, přehled kvízů, detail kvízu, žebříček)
      - použij router (musíš si ho nainstalovat)
    */

const App = () => {
  const [answers, setAnswers] = useState([]);
  const [detail, setDetail] = useState(null);
  const [rightAnswers, setRightAnswers] = useState(0);

  const increaseRightAnswers = () => {
    setRightAnswers((prev) => prev + 1);
  };

  const rememberAnswer = (id) => {
    setAnswers((prev) => [...prev, id]);
  };

  const pickQuizDetail = (data) => {
    setDetail(data);
  };

  const reset = () => {
    setRightAnswers(0);
    setAnswers([]);
  }

  return (
    <BrowserRouter>
      <QuizHeader />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List reset={reset} />} />
          <Route
            path="/list/:id"
            element={
              <Detail
                pickQuizDetail={pickQuizDetail}
                rememberAnswer={rememberAnswer}
                detail={detail}
                increaseRightAnswers={increaseRightAnswers}
              />
            }
          />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route
            path="/result"
            element={
              <Result
                answers={answers}
                detail={detail}
                rightAnswers={rightAnswers}
                increaseRightAnswers={increaseRightAnswers}
              />
            }
          />
        </Routes>
      </main>
      <QuizFooter />
    </BrowserRouter>
  );
};

render(<App />, document.querySelector("#app"));
