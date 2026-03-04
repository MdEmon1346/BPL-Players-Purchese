import { Suspense, useState } from "react";
import "./App.css";

import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import NavBar from "./components/NavBar/NavBar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import CommonNav from "./components/CommonNav/CommonNav";

const playersPromise = fetch("/players.json").then((res) => res.json());

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <NavBar></NavBar>
      <CommonNav
        toggle={toggle}
        setToggle={setToggle}
        playersPromise={playersPromise}
      ></CommonNav>

      {toggle === true ? (
        <Suspense fallback={<h3>players are loading</h3>}>
          <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </>
  );
}

export default App;
