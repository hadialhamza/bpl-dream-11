import React, { Suspense, useState } from "react";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";
import LoadingCard from "./LoadingCard";

const playersPromise = fetch("/players.json").then((res) => res.json());

const PlayersContainer = ({ balance, setBalance, handleSetBalance }) => {
  const [showPlayers, setShowPlayers] = useState(true);

  return (
    <>
      <div className="max-w-[1440px] mx-auto my-5 flex justify-between items-center">
        <h2 className="text-3xl font-bold">Available Players</h2>
        <div>
          <button
            onClick={() => setShowPlayers(true)}
            className={`text-base font-bold px-7 py-3 border border-gray-300 rounded-2xl rounded-r-none border-r-0  cursor-pointer ${
              showPlayers && "bg-[#E7FE29]"
            } `}
          >
            Available
          </button>
          <button
            onClick={() => setShowPlayers(false)}
            className={`text-base font-bold px-7 py-3 border border-gray-300 rounded-2xl rounded-l-none border-l-0 cursor-pointer ${
              showPlayers || "bg-[#E7FE29]"
            }`}
          >
            Selected
          </button>
        </div>
      </div>
      <Suspense fallback={<LoadingCard />}>
        {showPlayers ? (
          <AvailablePlayers
            playersPromise={playersPromise}
            balance={balance}
            setBalance={setBalance}
            handleSetBalance={handleSetBalance}
          />
        ) : (
          <SelectedPlayers />
        )}
      </Suspense>
    </>
  );
};

export default PlayersContainer;
