import { Suspense } from "react";
import "./App.css";

import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import NavBar from "./components/NavBar/NavBar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

const playersPromise = fetch('/players.json')
.then(res=>res.json());

function App() {
  return (
    <>
      <Suspense fallback={<h3>players are loading</h3>}>
        <NavBar></NavBar>
        

        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>

        {/* <SelectedPlayers></SelectedPlayers> */}
      </Suspense>
    </>
  );
}

export default App;
