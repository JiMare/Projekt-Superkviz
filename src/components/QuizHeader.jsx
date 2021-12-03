import React from "react";
import { Link } from "react-router-dom";

export const QuizHeader = () => {
  return (
    <header className="header">
      <h1 className="header__title">Superkvíz</h1>
      <nav className="menu">
        <Link className="menu__link" to="/">Úvod</Link>
        <Link className="menu__link" to="/list">Kvízy</Link>
        <Link className="menu__link" to="/leaderboard">Žebříček</Link>
      </nav>
    </header>
  );
};
