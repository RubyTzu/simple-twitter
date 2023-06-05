import { ReactComponent as LogoSVG } from "assets/Icon.svg";
import { ReactComponent as LogOutSVG } from "assets/LogOut.svg";

export const Navbar = () => {
  return (
    <div className="navbarContainer">
      <LogoSVG />

      <div></div>

      <button>
        <LogOutSVG />
        <p>登出</p>
      </button>
    </div>
  );
};
