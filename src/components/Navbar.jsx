import { ReactComponent as LogoSVG } from "assets/Icon.svg";
import { ReactComponent as HomeSVG } from "assets/Home.svg";
import { ReactComponent as UserSVG } from "assets/User.svg";
import { ReactComponent as SettingSVG } from "assets/Setting.svg";
import { ReactComponent as LogOutSVG } from "assets/LogOut.svg";
import "components/Navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbarTopPart">
        <LogoSVG className="logo" />
        <button className="navbarButton">
          <HomeSVG className="navbarIcon" />
          首頁
        </button>
        <button className="navbarButton">
          <UserSVG className="navbarIcon" />
          個人資料
        </button>
        <button className="navbarButton">
          <SettingSVG className="navbarIcon" />
          設定
        </button>
        <button className="tweetButton" onClick={() => console.log("ok!")}>
          推文
        </button>
      </div>

      <button className="navbarButton">
        <LogOutSVG className="navbarIcon" />
        登出
      </button>
    </div>
  );
};
