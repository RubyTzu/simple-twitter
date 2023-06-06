import { ReactComponent as LogoSVG } from "assets/Icon.svg";
import { ReactComponent as HomeSVG } from "assets/Home.svg";
import { ReactComponent as UserSVG } from "assets/User.svg";
import { ReactComponent as SettingSVG } from "assets/Setting.svg";
import { ReactComponent as LogOutSVG } from "assets/LogOut.svg";
import styles from "./Navbar.module.scss"

export const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarTopPart}>
        <LogoSVG className={styles.logo} />
        <div className={styles.homeUserSettingbar}>
          <button className={`${styles.navbarButton} ${styles.chooseButton}`}>
            <HomeSVG className={styles.navbarIcon} />
            首頁
          </button>
          <button className={styles.navbarButton}>
            <UserSVG className={styles.navbarIcon} />
            個人資料
          </button>
          <button className={styles.navbarButton}>
            <SettingSVG className={styles.navbarIcon} />
            設定
          </button>
        </div>

        <button
          className={styles.tweetButton}
          onClick={() => console.log("ok!")}
        >
          推文
        </button>
      </div>

      <button className={styles.navbarButton}>
        <LogOutSVG className={styles.navbarIcon} />
        登出
      </button>
    </div>
  );
};
