import nameImg from "../../assets/name.png";
import flgImg from "../../assets/flag.png";

const Player = ({ player }) => {
  console.log(player);
  const { playerImg, playerName } = player;
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
        <div className="flex gap-2 items-center border-b pb-2 ">
          <img className="w-3 h-3 opacity-50 " src={flgImg} alt="flag" />
          <h3 className="card-title font-thin text-base">
            Player Name: {playerName}
          </h3>
          <button className=" bg-gray-200 border-none w-30 h-9 rounded-md">
            Default
          </button>
        </div>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Player;
