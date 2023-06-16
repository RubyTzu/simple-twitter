import { ReactComponent as LogoSVG } from "assets/Icon.svg";
import { ReactComponent as HomeSVG } from "assets/Home.svg";
import { ReactComponent as UserSVG } from "assets/User.svg";
import { ReactComponent as SettingSVG } from "assets/Setting.svg";
import { ReactComponent as LogOutSVG } from "assets/LogOut.svg";
import { AddTweetModal } from "./modals/AddTweetModal";

import styles from "./Navbar.module.scss";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "context/authContext";

const getId = () => {
  const id = localStorage.getItem("id");
  return id;
};

export const Navbar = () => {
  const { logout } = useAuth();
  const types = [
    {
      dataType: "home",
      name: "首頁",
      route: "/home",
    },
    {
      dataType: "user-info",
      name: "個人資料",
      route: `/userself/${getId()}`,
    },
    {
      dataType: "account-setting",
      name: "設定",
      route: "/setting",
    },
  ];
  const navigate = useNavigate();
  const location = useLocation();
  const [activePage, setActivePage] = useState(location.pathname);
  let typeInfos = types;

  const handleLogout = () => {
    logout();
    navigate("/login");
    alert("已登出");
  };

  useEffect(() => {
    setActivePage(location.pathname);
    console.log(`Navbar useEffect的location:${location.pathname}`);
  }, [location]);

  const handleStyleChange = () => {
    setActivePage(location.pathname);
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarTopPart}>
        <LogoSVG className={styles.logo} />
        <div className={styles.homeUserSettingbar}>
          {typeInfos.map((info) => {
            const linkClassName = `${styles.navbarButton} ${
              activePage === info.route ? styles.chooseButton : ""
            }`;

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
          onClick={(e) => {
            e.stopPropagation();
          }}
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
