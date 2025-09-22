import React, { useState } from "react";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

const PlayersContainer = () => {
  const [showPlayers, setShowPlayers] = useState(true);
  const handleShowPlayers = () => {
    setShowPlayers(!showPlayers);
  };
  return (
    <>
      <div className="max-w-[1440px] mx-auto my-5 flex justify-between items-center">
        <h2 className="text-3xl font-bold">Available Players</h2>
        <div>
          <button
            onClick={handleShowPlayers}
            className="text-base font-bold px-7 py-3 border border-gray-300 rounded-2xl rounded-r-none border-r-0 bg-[#E7FE29] cursor-pointer"
          >
            Available
          </button>
          <button
            onClick={handleShowPlayers}
            className="text-base font-bold px-7 py-3 border border-gray-300 rounded-2xl rounded-l-none border-l-0 cursor-pointer"
          >
            Selected
          </button>
        </div>
      </div>
      {showPlayers ? <AvailablePlayers /> : <SelectedPlayers />}
    </>
  );
};

export default PlayersContainer;
