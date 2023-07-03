import { ReactComponent as BackSVG } from "assets/Back.svg";
import { FollowCollection } from "components/FollowsCollection";
import styles from "./FollowPage.module.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProfile } from "api/userinfo";
const id = localStorage.getItem("id");

export const FollowPage = () => {
  let { state } = useLocation();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    (async () => setUserData(await getProfile(id)))();
  }, []);
  return (
    <>
      <div className={styles.mainbarContainer}>
        <header className={styles.followPageHeader}>
          <Link to={`/userself/${id}`}>
            <BackSVG className={styles.logo} />
          </Link>
          <div className={styles.followPageHeaderText}>
            <p className={styles.followPageTitle}>{userData.name}</p>
            <p className={styles.followPageTweetCounts}>
              {userData.tweetsCounts} 推文
            </p>
          </div>
        </header>
        <FollowCollection clicked={state} />
      </div>
    </>
  );
};
