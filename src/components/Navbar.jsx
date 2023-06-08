import { ReactComponent as LogoSVG } from "assets/Icon.svg";
import { ReactComponent as HomeSVG } from "assets/Home.svg";
import { ReactComponent as UserSVG } from "assets/User.svg";
import { ReactComponent as SettingSVG } from "assets/Setting.svg";
import { ReactComponent as LogOutSVG } from "assets/LogOut.svg";
import styles from "./Navbar.module.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "context/authContext";
export const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate("/login");
    alert("已登出");
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarTopPart}>
        <LogoSVG className={styles.logo} />
        <div className={styles.homeUserSettingbar}>
          <Link
            to="/home"
            className={`${styles.navbarButton} ${styles.chooseButton}`}
          >
            <HomeSVG className={styles.navbarIcon} />
            首頁
          </Link>
          <Link to="/userself" className={styles.navbarButton}>
            <UserSVG className={styles.navbarIcon} />
            個人資料
          </Link>
          <Link to="/setting" className={styles.navbarButton}>
            <SettingSVG className={styles.navbarIcon} />
            設定
          </Link>
        </div>

        <button
          className={styles.tweetButton}
          onClick={() => console.log("ok!")}
        >
          推文
        </button>
      </div>

      <button className={styles.navbarButton} onClick={handleClick}>
        <LogOutSVG className={styles.navbarIcon} />
        登出
      </button>
    </div>
  );
};
