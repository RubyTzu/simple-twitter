import { ReactComponent as LogoSVG } from "assets/Icon.svg";
import { ReactComponent as HomeSVG } from "assets/Home.svg";
import { ReactComponent as UserSVG } from "assets/User.svg";
import { ReactComponent as LogOutSVG } from "assets/LogOut.svg";
import styles from "./AdminNavbar.module.scss"

export const AdminNavbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarTopPart}>
        <LogoSVG className={styles.logo} />
        <div className={styles.homeUserSettingbar}>
          <button className={`${styles.navbarButton} ${styles.chooseButton}`}>
            <HomeSVG className={styles.navbarIcon} />
            推文清單
          </button>
          <button className={styles.navbarButton}>
            <UserSVG className={styles.navbarIcon} />
            使用者列表
          </button>
        </div>
      </div>

      <button className={styles.navbarButton}>
        <LogOutSVG className={styles.navbarIcon} />
        登出
      </button>
    </div>
  );
};
