import { use } from "react";

const CommonNav = ({ playersPromise, toggle, setToggle, selectedMan }) => {
  const playersLength = use(playersPromise);
  return (
    <div className="flex font-semibold justify-between max-w-7xl mx-auto items-center">
      <h2>
        {toggle
          ? `Available Players : ${playersLength.length}`
          : `Selected Players : (${selectedMan.length}/6) `}
      </h2>
      <div className="mr-4">
        <button
          onClick={() => setToggle(true)}
          className={`p-3 border border-r-0 border-gray-300 rounded-l-lg ${
            toggle ? "bg-green-400" : ""
          }`}
        >
          Available
        </button>
        <button
          onClick={() => setToggle(false)}
          className={`p-3 border border-l-0 border-gray-300 rounded-r-lg ${
            !toggle ? "bg-green-400" : ""
          }`}
        >
          Selected <span>({selectedMan.length})</span>
        </button>
      </div>
    </div>
  );
};

export default CommonNav;
