import "./App.css";
import Navbar from "./Components/Navbar";
import PlayersContainer from "./Components/PlayersContainer";


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
