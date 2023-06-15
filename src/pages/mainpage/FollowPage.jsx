import { ReactComponent as BackSVG } from "assets/Back.svg";
import { FollowCollection } from "components/FollowsCollection";
import styles from "./FollowPage.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "context/authContext";
export const FollowPage = () => {
  const { isAuthenticated } = useAuth();
  const id = localStorage.getItem("id");
  const navigate = useNavigate();

  let { state } = useLocation();
  useEffect(() => {
    // console.log(payload);
    if (!isAuthenticated) {
      navigate("/login");
      return;
    } else return;
  }, [isAuthenticated, navigate]);

  return (
    <>
      <div className={styles.mainbarContainer}>
        <header className={styles.followPageHeader}>
          <Link to={`/userself/${id}`}>
            <BackSVG className={styles.logo} />
          </Link>
          <div className={styles.followPageHeaderText}>
            <p className={styles.followPageTitle}>123</p>
            <p className={styles.followPageTweetCounts}>1 推文</p>
          </div>
        </header>
        <FollowCollection clicked={state} />
      </div>
    </>
  );
};
