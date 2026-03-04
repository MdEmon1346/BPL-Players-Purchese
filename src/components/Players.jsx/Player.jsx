import nameImg from "../../assets/name.png";
import flgImg from "../../assets/flag.png";
import { useState } from "react";

const Player = ({ player, balance, setBalance,selectedMan, setSelectedMan }) => {
  // console.log(typeof(player.price));

  const [selected, setSelected] = useState(false);
  const {
    playerImg,
    playerName,
    playerCountry,
    rating,
    battingStyle,
    bowlingStyle,
    price,
    playingRole,
  } = player;
  const remainBalance = parseInt(balance - price);
  return (
    <div className="card w-96 shadow-sm  py-4 my-4 ">
      <figure>
        <img className="object-cover w-full" src={playerImg} alt={playerName} />
      </figure>
      <div className="card-body">
        <div className="flex gap-2 items-center">
          <img className="w-4 h-4" src={nameImg} alt="" />
          <h3 className="card-title">Player Name: {playerName} </h3>
        </div>

        <div className="justify-between flex items-center pb-2 border-b border-gray-300">
          <div className="flex gap-2 items-center  ">
            <img className="w-3 h-3 opacity-50 " src={flgImg} alt="flag" />
            <h2 className="card-title font-thin text-base">{playerCountry}</h2>
          </div>

          <button className=" bg-gray-200 border-none w-25 h-6 rounded-sm font-thin text-base">
            {playingRole}
          </button>
        </div>

        <div className="justify-between flex items-center font-bold">
          <span>Ratings: </span>
          <span>{rating}</span>
        </div>

        <div className="justify-between flex items-center ">
          <span className="font-bold">{battingStyle} </span>
          <span>{bowlingStyle}</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex ">
            <h2 className="font-bold">Price: {price}</h2>
            <span className="pl-1 font-bold">USD</span>
          </div>

          <button
            onClick={() => {
              if (remainBalance < price) {
                alert("Not Enough USD");
              } else {
                setSelected((prev) => !prev);
                setBalance(remainBalance);
              };
              setSelectedMan([...selectedMan, player]);
            }}
            className="bg-gray-200 border-none w-30 h-8 rounded-sm font-thin text-sm"
          >
            {selected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
