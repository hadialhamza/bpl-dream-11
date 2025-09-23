import React from "react";
import PlayerCard from "./PlayerCard";

const SelectedPlayers = ({ selectedPlayers }) => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="grid grid-cols-3 gap-6">
        {selectedPlayers.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default SelectedPlayers;
