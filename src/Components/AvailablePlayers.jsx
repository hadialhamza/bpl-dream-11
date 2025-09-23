import React, { use } from "react";
import PlayerCard from "./PlayerCard";

const AvailablePlayers = ({
  playersPromise,
  balance,
  setBalance,
  handleSetBalance,
  handleSelectedPlayers,
}) => {
  const playersData = use(playersPromise);
  const allPlayers = playersData.players;
  return (
    <div className="max-w-[1440px] mx-auto grid grid-cols-3 gap-6">
      {allPlayers.map((player) => (
        <PlayerCard
          key={player.id}
          player={player}
          balance={balance}
          setBalance={setBalance}
          handleSetBalance={handleSetBalance}
          handleSelectedPlayers={handleSelectedPlayers}
        />
      ))}
    </div>
  );
};

export default AvailablePlayers;
