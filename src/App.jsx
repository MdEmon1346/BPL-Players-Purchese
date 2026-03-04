import { Suspense, useState } from "react";
import "./App.css";
import { ToastContainer} from "react-toastify";

import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import NavBar from "./components/NavBar/NavBar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import CommonNav from "./components/CommonNav/CommonNav";

const playersPromise = fetch("/players.json").then((res) => res.json());

function App() {
  const [toggle, setToggle] = useState(true);
  const [balance, setBalance] = useState(60000000000);
  const [selectedMan, setSelectedMan] = useState([]);
  const removePlayer = (p) => {
    const filterData = selectedMan.filter((ply) => ply.id !== p.id);
    setSelectedMan(filterData);
    setBalance(balance + p.price);
  };
  // console.log(selectedMan);
  return (
    <>
      <NavBar balance={balance}></NavBar>
      <CommonNav
        toggle={toggle}
        setToggle={setToggle}
        playersPromise={playersPromise}
        selectedMan={selectedMan}
      ></CommonNav>

      {toggle === true ? (
        <Suspense fallback={<h3>players are loading</h3>}>
          <AvailablePlayers
            balance={balance}
            setBalance={setBalance}
            playersPromise={playersPromise}
            selectedMan={selectedMan}
            setSelectedMan={setSelectedMan}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          removePlayer={removePlayer}
          selectedMan={selectedMan}
          setSelectedMan={setSelectedMan}
        ></SelectedPlayers>
      )}
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
