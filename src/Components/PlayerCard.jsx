import React, { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { FaFlag } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";

const PlayerCard = ({ player, handleSetBalance, handleSelectedPlayers }) => {
  const {
    name,
    image,
    country,
    role,
    batting_style,
    bowling_style,
    price,
    rating,
  } = player;

  const [selectBtn, setSelectBtn] = useState(false);
  const handleSetSelectBtn = () => {
    handleSetBalance(price) && setSelectBtn(true);
    handleSelectedPlayers(player) && setSelectBtn(true);
  };

  return (
    <div className="flex flex-col gap-3 border border-gray-300 rounded-2xl p-6">
      <img src={image} alt="" className="rounded-2xl " />
      <div className="flex items-center gap-4">
        <span className="text-2xl">
          <IoPersonSharp />
        </span>
        <h2 className="text-xl font-bold">{name}</h2>
      </div>
      <div className="flex justify-between items-center border-b border-gray-200 pb-4">
        <p className="text-base font-medium text-gray-500 flex items-center gap-3">
          <FaFlag /> {country}{" "}
        </p>
        <p className="bg-gray-100 px-4 py-2 rounded-[10px] text-gray-700">
          {role}
        </p>
      </div>
      <h2 className="text-base font-bold">Ratting: {rating}</h2>
      <div className="flex justify-between items-center text-base font-bold">
        <p>{batting_style} </p>
        <p className="text-gray-500 font-normal">{bowling_style} </p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold text-base">Price: $ {price} </p>
        <button
          disabled={selectBtn}
          onClick={handleSetSelectBtn}
          className="btn btn-info text-base font-medium rounded-[10px]"
        >
          {selectBtn ? (
            <>
              Player Selected <TiTick className="text-xl" />
            </>
          ) : (
            "Choose Player"
          )}
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;
