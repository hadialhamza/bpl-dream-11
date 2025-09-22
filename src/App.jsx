import "./App.css";
import Navbar from "./Components/Navbar";
import PlayersContainer from "./Components/PlayersContainer";

// const playersPromise = fetch("/players.json").then((res) => res.json());

function App() {
  return (
    <>
      <Navbar />
      <PlayersContainer />
      {/* <Players playersPromise={playersPromise} /> */}
    </>
  );
}

export default App;
