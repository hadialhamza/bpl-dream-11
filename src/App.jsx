import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import PlayersContainer from "./Components/PlayersContainer";

function App() {
  const [balance, setBalance] = useState(1000000);
  const handleSetBalance = (price) => {
    if (price > balance) {
      alert("you don't have enough balance");
      return;
    }
    setBalance(balance - price);
  };

  return (
    <>
      <Navbar balance={balance} />
      <PlayersContainer
        balance={balance}
        setBalance={setBalance}
        handleSetBalance={handleSetBalance}
      />
    </>
  );
}

export default App;
