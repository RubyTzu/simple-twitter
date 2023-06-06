import { Navbar } from "components/Navbar";
import { Rightbar } from "components/Rightbar";
import { Tweet } from "components/Tweet";
import styles from "./HomePage.module.scss"

export const HomePage = () => {
  return (
    <div className={styles.homePageContainer}>
      <Navbar />
      <div className={styles.mainbarContainer}>
        <h1 className={styles.homePageTitle}>首頁</h1>
        <div className={styles.addTweetSection}></div>
        <div className={styles.tweetsCollection}>
          <Tweet />
          <Tweet />
        </div>
      </div>
      <Rightbar />
    </div>
  );
};
