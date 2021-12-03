import React, { useState, useEffect } from "react";

export const Leaderboard = () => {
  const [board, setBoard] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Czechitas-React-podklady/superkviz-api/main/topscore.json"
    )
      .then((response) => response.json())
      .then((data) => setBoard(data));
  }, []);

  return (
    <div className="topscore">
      <h2 className="topscore__title">Žebříček nejlepších</h2>

      <ul className="topscore__list">
        {board &&
          board.map((player, index) => (
            <li className="topscore__item" key={index}>
              <span className="topscore__name">{player.name}</span>
              <span className="topscore__score">{player.score}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};
