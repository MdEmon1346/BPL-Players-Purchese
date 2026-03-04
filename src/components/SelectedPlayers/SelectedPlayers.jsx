import SelectedCard from "../SelectedCard/SelectedCard";

const SelectedPlayers = ({ selectedMan }) => {
  // console.log(selectedMan);
  return (
    <div className="max-w-7xl mx-auto">
      {
        selectedMan.map(InPlayer=><SelectedCard InPlayer={InPlayer}></SelectedCard>)
      }
    </div>
  );
};

export default SelectedPlayers;
