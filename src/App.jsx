import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import PlayersContainer from "./Components/PlayersContainer";
import { toast, ToastContainer } from "react-toastify";

function App() {
  const [balance, setBalance] = useState(1000000);
  const handleSetBalance = (price) => {
    if (price > balance) {
      toast.error("You don't have enough balance");
      return false;
    }
    setBalance(balance - price);
    return true;
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
