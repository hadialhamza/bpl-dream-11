import React, { use } from "react";
import Player from "./Player";

const Players = ({ playersPromise }) => {
  const playersData = use(playersPromise);
  const players = playersData.players;
  console.log(players);
  return (
    <div>
      {players.map((player) => (
        <Player player={player} />
      ))}
    </div>
  );
};

export default Players;
