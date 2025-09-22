import React from "react";
import { FaUser } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";

const SelectedPlayers = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <h2 className="text-3xl font-bold">
        {" "}
        <RxAvatar /> Selected players
      </h2>
    </div>
  );
};

export default SelectedPlayers;
