import nameImg from "../../assets/name.png";
import flgImg from "../../assets/flag.png";

const Player = ({ player }) => {
  console.log(player);
  const {
    playerImg,
    playerName,
    playerCountry,
    rating,
    battingStyle,
    bowlingStyle,
    price,
  } = player;
  return (
    <div className="card w-96 shadow-sm  py-4 my-4 ">
      <figure>
        <img src={playerImg} alt={playerName} />
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
            All Rounder
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

          <button className=" bg-gray-200 border-none w-30 h-8 rounded-sm font-thin text-sm">
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
