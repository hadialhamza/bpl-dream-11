import "./App.css";
import Navbar from "./Components/Navbar";
import Players from "./Components/Players";

const playersPromise = fetch("/players.json").then((res) => res.json());

function App() {
  return (
    <>
      <Navbar />
      {/* <Players playersPromise={playersPromise} /> */}
    </>
  );
}

export default App;
