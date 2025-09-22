import React, { use } from "react";
import PlayerCard from "./PlayerCard";

const AvailablePlayers = ({ playersPromise }) => {
  const playersData = use(playersPromise);
  const allPlayers = playersData.players;
  console.log(allPlayers);
  return (
    <div className="max-w-[1440px] mx-auto grid grid-cols-3 gap-6">
      {allPlayers.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
};

export default AvailablePlayers;
