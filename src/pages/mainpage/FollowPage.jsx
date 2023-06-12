import { ReactComponent as BackSVG } from "assets/Back.svg";
import { FollowCollection } from "components/FollowsCollection";
import styles from "./FollowPage.module.scss";
import { Link } from "react-router-dom";

export const FollowPage = () => {
  return (
    <>
      <div className={styles.mainbarContainer}>
        <header className={styles.followPageHeader}>
          <Link to="/userself">
            <BackSVG className={styles.logo} />
          </Link>
          <div className={styles.followPageHeaderText}>
            <p className={styles.followPageTitle}>John Doe</p>
            <p className={styles.followPageTweetCounts}>25 推文</p>
          </div>
        </header>
        <FollowCollection />
      </div>
    </>
  );
};
