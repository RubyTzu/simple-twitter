import { ReactComponent as BackSVG } from "assets/Back.svg";
import { Navbar } from "components/Navbar";
import { Rightbar } from "components/Rightbar";
import styles from "./UserSelfPage.module.scss";

export const UserSelfPage = () => {
  return (
    <div className={styles.mainPageContainer}>
      <Navbar />
      <div className={styles.mainbarContainer}>
        <header className={styles.userPageHeader}>
          <BackSVG className={styles.logo} />
          <div className={styles.userPageHeaderText}>
            <p className={styles.userPageTitle}>mySelf</p>
            <p className={styles.userPageTweetCounts}>25 推文</p>
          </div>
        </header>
      </div>
      <Rightbar />
    </div>
  );
};
