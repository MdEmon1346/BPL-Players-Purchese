import { use } from "react";
import Player from "../Players.jsx/Player";

const AvailablePlayers = ({playersPromise}) => {
   const players = use(playersPromise);
//    console.log(players);
    return (
        <div className="max-w-7xl mx-auto" >
            <h2>Available Players: {players.length}</h2>
            {
                players.map(player=><Player key={player.id} player={player}></Player>)
            }
        </div>
    );
};

export default AvailablePlayers;