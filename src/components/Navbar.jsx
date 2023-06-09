import { ReactComponent as LogoSVG } from "assets/Icon.svg";
import { ReactComponent as HomeSVG } from "assets/Home.svg";
import { ReactComponent as UserSVG } from "assets/User.svg";
import { ReactComponent as SettingSVG } from "assets/Setting.svg";
import { ReactComponent as LogOutSVG } from "assets/LogOut.svg";

import styles from "./Navbar.module.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "context/authContext";
import { AddTweetModal } from "./modals/AddTweetModal";
// import { useEffect, useRef } from "react";
import { useRef } from "react";

const types = [
  {
    dataType: "home",
    name: "首頁",
    route: "/home",
  },
  {
    dataType: "user-info",
    name: "個人資料",
    route: "/userself",
  },
  {
    dataType: "account-setting",
    name: "設定",
    route: "/setting",
  },
];

export const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  let typeInfos = types;
  const activePage = useRef("首頁");
  //{ current: "首頁" }
  const handleLogout = () => {
    logout();
    navigate("/login");
    alert("已登出");
  };



  const handleStyleChange = (e) => {
    activePage.current = e.target.innerText;
    // console.log(`handleStyleChange裡的 ${activePage.current}`);
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarTopPart}>
        <LogoSVG className={styles.logo} />
        <div className={styles.homeUserSettingbar}>
          {typeInfos.map((info) => {
            const linkClassName = `${styles.navbarButton} ${
              activePage.current === info.name ? styles.chooseButton : ""
            }`

            const linkIcon = () => {
              if (info.name === "首頁") {
                return <HomeSVG className={styles.navbarIcon} />;
              } else if (info.name === "個人資料") {
                return <UserSVG className={styles.navbarIcon} />;
              } else if (info.name === "設定") {
                return <SettingSVG className={styles.navbarIcon} />;
              }
            };

            return (
              <Link
                key={info.dataType}
                to={info.route}
                className={linkClassName}
                onClick={handleStyleChange}
              >
                {linkIcon()}
                {info.name}
              </Link>
            );
          })}

        
        </div>
        <button
          type="button"
          className={`${styles.tweetButton}`}
          data-bs-toggle="modal"
          data-bs-target="#addTweetModal"
        >
          推文
        </button>
        <AddTweetModal />
      </div>

      <button className={styles.navbarButton} onClick={handleLogout}>
        <LogOutSVG className={styles.navbarIcon} />
        登出
      </button>
    </div>
  );
};
