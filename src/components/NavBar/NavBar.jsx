import navLogo from "../../assets/logo.png";
import dollarImg from "../../assets/Currency.png";
const NavBar = ({balance}) => {
  return (
    <nav className="max-w-7xl mx-auto">
      <div className="navbar  py-2  ">
        <div className="flex-none"></div>
        <div className="flex-1">
          <a className="text-xl">
            <img className="w-15 h-15" src={navLogo} alt="Logo" />
          </a>
        </div>
        <div className="flex items-center gap-1 mx-2">
          <span>{balance}</span>
          <span> Coin</span>
          <img className="w-4 h-4" src={dollarImg} alt="currency" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
