import { ReactComponent as BackSVG } from "assets/Back.svg";
import { FollowCollection } from "components/FollowsCollection";
import styles from "./FollowPage.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "context/authContext";
import { getProfile } from "api/userinfo";
export const FollowPage = () => {
  const { isAuthenticated } = useAuth();
  const id = localStorage.getItem("id");
  const navigate = useNavigate();
  let { state } = useLocation();
  const [userData, setUserData] = useState({});
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    } else return;
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const showData = async () => {
      const userData = await getProfile(id);
      setUserData(userData);
    };
    showData();
  }, [id]);
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
