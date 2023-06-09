import { ReactComponent as LogoSVG } from "assets/Icon.svg";
import { ReactComponent as HomeSVG } from "assets/Home.svg";
import { ReactComponent as UserSVG } from "assets/User.svg";
import { ReactComponent as HomeActiveSVG } from "assets/HomeActive.svg";
import { ReactComponent as UserActiveSVG } from "assets/UserActive.svg";
import { ReactComponent as LogOutSVG } from "assets/LogOut.svg";
import styles from "./AdminNavbar.module.scss";
import { useNavigate, Link } from "react-router-dom";
import { useRef } from "react";
import { useAuth } from "context/authContext";

const types = [
  {
    dataType: "admin-tweetslist",
    name: "推文清單",
    route: "/admin/tweetslist",
  },
  {
    dataType: "admin-userlist",
    name: "使用者列表",
    route: "/admin/userslist",
  },
];

export const AdminNavbar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  let typeInfos = types;
  const activePage = useRef("推文清單");
  const id = localStorage.getItem("id");

  const handleLogout = () => {
    logout();
    setInterval(() => {
      if (id) {
        console.log(id);
        console.log("reload");
        window.location.reload();
      } else {
        console.log(id);
        alert("已登出");
        navigate("/admin/login");
        return;
      }
    }, 500);
  };

  const handleStyleChange = (e) => {
    activePage.current = e.target.innerText;
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarTopPart}>
        <LogoSVG className={styles.logo} />
        <div className={styles.homeUserSettingbar}>
          {typeInfos.map((info) => {
            const linkClassName = `${styles.navbarButton} ${
              activePage.current === info.name ? styles.chooseButton : ""
            }`;

            const linkIcon = () => {
              if (
                info.name === "推文清單" &&
                activePage.current === info.name
              ) {
                return <HomeActiveSVG className={styles.navbarIcon} />;
              } else if (
                info.name === "使用者列表" &&
                activePage.current === info.name
              ) {
                return <UserActiveSVG className={styles.navbarIcon} />;
              } else if (
                info.name === "推文清單" &&
                activePage.current !== info.name
              ) {
                return <HomeSVG className={styles.navbarIcon} />;
              } else if (
                info.name === "使用者列表" &&
                activePage.current !== info.name
              ) {
                return <UserSVG className={styles.navbarIcon} />;
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
      </div>

      <button onClick={handleLogout} className={styles.navbarButton}>
        <LogOutSVG className={styles.navbarIcon} />
        登出
      </button>
    </div>
  );
};
