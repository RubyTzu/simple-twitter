import { ReactComponent as BackSVG } from "assets/Back.svg";
import userselfAvatar from "assets/GreyIcon.svg";
import userselfBcg from "assets/userselfBcg.svg";
import styles from "./UserSelfPage.module.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserTweetsCollection } from "components/UserTweetsCollection";
import { InfoEditModal } from "components/modals/InfoEditModal";
import { useEffect, useState } from "react";
import { getUserLikedTweets, getUserReplies, getUserTweets } from "api/tweet";
import { getFollowCounts, getProfile } from "api/userinfo";
import { useAuth } from "context/authContext";

export const UserSelfPage = () => {
  const [profile, setProfile] = useState([]);
  const [followCounts, setFollowCounts] = useState([]);
  const [tweets, setTweets] = useState([]);
  const [replies, setReplies] = useState([]);
  const [likedTweets, setLikedTweets] = useState([]);
  const { userId } = useParams();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    } else return;
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const showPage = async () => {
      setProfile(await getProfile(userId));
      setFollowCounts(await getFollowCounts(userId));
      setTweets(await getUserTweets(userId));
      setReplies(await getUserReplies(userId));
      setLikedTweets(await getUserLikedTweets(userId));
    };
    showPage();
  }, [userId]);

  return (
    <>
      <div className={styles.mainbarContainer}>
        <header className={styles.userPageHeader}>
          <Link onClick={() => navigate(-1)}>
            <BackSVG className={styles.logo} />
          </Link>
          <div className={styles.userPageHeaderText}>
            <p className={styles.userPageTitle}>{profile.name}</p>
            <p className={styles.userPageTweetCounts}>
              {profile.tweetsCounts} 推文
            </p>
          </div>
        </header>
        <div className={styles.userinfoContainer}>
          <img
            className={styles.userBcgImage}
            src={
              profile.coverPhoto === null || profile.coverPhoto === "null"
                ? userselfBcg
                : profile.coverPhoto
            }
            alt=""
          />
          <img
            className={styles.userAvatar}
            src={profile.avatar === null ? userselfAvatar : profile.avatar}
            alt=""
          />
          <button
            type="button"
            className={`${styles.editUserinfoBtn}`}
            data-bs-toggle="modal"
            data-bs-target="#infoEditModal"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            編輯個人資料
          </button>
          <InfoEditModal />
          <div className={styles.userinfo}>
            <div>
              <b>{profile.name}</b>
            </div>

            <div className={styles.nickName}>@{profile.account}</div>

            <div className={styles.description}>
              {profile.introduction === null
                ? "*使用者無簡介*"
                : profile.introduction}
            </div>

            <div className={styles.follow}>
              <Link
                to="/followlist"
                state={"正在追隨"}
                className={styles.followerInfoBtn}
              >
                <span className={styles.followNum}>
                  {followCounts.followingCount} 個
                </span>
                <span>跟隨中</span>
              </Link>
              <Link
                to="/followlist"
                state={"追隨者"}
                className={styles.followingInfoBtn}
              >
                <span className={styles.followNum}>
                  {followCounts.followerCount} 位
                </span>
                <span>跟隨者</span>
              </Link>
            </div>
          </div>
        </div>
        <UserTweetsCollection
          tweetsCollection={{
            tweets: tweets,
            replies: replies,
            liked: likedTweets,
          }}
        />
      </div>
    </>
  );
};
