import React from "react";
import Logo from "../assets/logo.png";
import CoinLogo from "../assets/icons8-coin.gif";

const Navbar = ({ balance }) => {
  return (
    <nav className="max-w-[1440px] mx-auto flex justify-between items-center my-6">
      <div>
        <img src={Logo} alt="" />
      </div>
      <div className="flex justify-center items-center gap-14">
        <a>Home</a>
        <a>Fixture</a>
        <a>Teams</a>
        <a>Schedules</a>
        <p className="flex justify-center items-center gap-2 font-bold text-xl border border-gray-300 rounded-2xl p-3">
          <span>{balance}</span> Coin{" "}
          <img src={CoinLogo} alt="" className="w-7" />
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
