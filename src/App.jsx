import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import PlayersContainer from "./Components/PlayersContainer";
import { ToastContainer } from "react-toastify";

function App() {
  const [balance, setBalance] = useState(1000000);
  const handleSetBalance = (price) => {
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
      <ToastContainer />
    </>
  );
}

export default App;
