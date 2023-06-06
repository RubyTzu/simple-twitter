import { ReactComponent as BackSVG } from "assets/Back.svg";
import { Navbar } from "components/Navbar";
import { Rightbar } from "components/Rightbar";
import styles from "./UserOtherPage.module.scss";

export const UserOtherPage = () => {
  return (
    <div className={styles.mainPageContainer}>
      <Navbar />
      <div className={styles.mainbarContainer}>
        <header className={styles.userPageHeader}>
          <BackSVG className={styles.logo} />
          <div className={styles.userPageHeaderText}>
            <p className={styles.userPageTitle}>Other User</p>
            <p className={styles.userPageTweetCounts}>25 推文</p>
          </div>
        </header>
      </div>
      <Rightbar />
    </div>
  );
};
