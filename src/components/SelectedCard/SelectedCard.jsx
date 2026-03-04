import deletes from "../../assets/delete.png";

const SelectedCard = ({ InPlayer }) => {
  console.log(InPlayer);
  return (
    <div>
      <div className="flex justify-between rounded-lg border-2 border-gray-300 items-center my-2 w-330 h-[128]">
        <div className="flex items-center px-1 py-2  ">
          <img className="w-14 rounded-lg" src={InPlayer.playerImg} alt="" />
          <div className="mx-2">
            <h3 className="font-bold">{InPlayer.playerName}</h3>
            <p className="font-light text-xs ">{InPlayer.battingStyle}</p>
          </div>
        </div>
        <div className="px-1">
          <img src={deletes} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SelectedCard;
