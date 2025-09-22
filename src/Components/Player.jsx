import React from "react";

const Player = ({ player }) => {
  const { image, name, country } = player;
  return (
    <div>
      <img src={image} alt="" />
      <h2>Name: {name} </h2>
      <h2>Country: {country} </h2>
    </div>
  );
};

export default Player;
