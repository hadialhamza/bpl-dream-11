import React, { Suspense, useState } from "react";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";
import LoadingCard from "./LoadingCard";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const playersPromise = fetch("/players.json").then((res) => res.json());

const PlayersContainer = ({ balance, setBalance, handleSetBalance }) => {
  const [showPlayers, setShowPlayers] = useState(true);

  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const handleSelectedPlayers = (player) => {
    if (selectedPlayers.length === 6) {
      toast.info("Maximum Player Selected");
      Swal.fire({
        title: "Error!",
        text: "Do you want to continue",
        icon: "error",
        confirmButtonText: "Cool",
      });
      return false;
    }

    setSelectedPlayers([...selectedPlayers, player]);
    return true;
  };

  return (
    <>
      <div className="max-w-[1440px] mx-auto my-5 flex justify-between items-center">
        <h2 className="text-3xl font-bold">
          {showPlayers
            ? "Available Players"
            : `Selected Players ${selectedPlayers.length}/6`}
        </h2>
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
            {`Selected (${selectedPlayers.length})`}
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
            handleSelectedPlayers={handleSelectedPlayers}
          />
        ) : (
          <SelectedPlayers selectedPlayers={selectedPlayers} />
        )}
      </Suspense>
    </>
  );
};

export default PlayersContainer;
