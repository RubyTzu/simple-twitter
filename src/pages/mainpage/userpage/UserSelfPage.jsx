import { ReactComponent as BackSVG } from "assets/Back.svg";
import userselfAvatar from "assets/userselfAvatar.svg";
import userselfBcg from "assets/userselfBcg.svg";
import styles from "./UserSelfPage.module.scss";
import { Link } from "react-router-dom";
import { UserTweetsCollection } from "components/UserTweetsCollection";
import { InfoEditModal } from "components/modals/InfoEditModal";
import { useEffect, useState } from "react";
import { getUserLikedTweets, getUserReplies, getUserTweets } from "api/tweet";
import { getFollowCounts, getProfile } from "api/userinfo";

export const UserSelfPage = () => {
  const [profile, setProfile] = useState([]);
  const [followCounts, setFollowCounts] = useState([]);
  const [tweets, setTweets] = useState([]);
  const [replies, setReplies] = useState([]);
  const [likedTweets, setLikedTweets] = useState([]);
  useEffect(() => {
    const showPage = async () => {
      setProfile(await getProfile());
      setFollowCounts(await getFollowCounts());
      setTweets(await getUserTweets());
      setReplies(await getUserReplies());
      setLikedTweets(await getUserLikedTweets());
    };
    showPage();
  }, []);

  return (
    <>
      <div className={styles.mainbarContainer}>
        <header className={styles.userPageHeader}>
          <Link to="/home">
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
            src={profile.coverPhoto === null ? userselfBcg : profile.coverPhoto}
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
            <span>
              <b>{profile.name}</b>
            </span>
            <span className={styles.nickName}>@{profile.name}</span>
            <span className={styles.description}>
              {profile.introduction === null
                ? "沒內容欸"
                : profile.introduction}
            </span>
            <span className={styles.follow}>
              <Link to="/followlist" className={styles.followerInfoBtn}>
                <span className={styles.followNum}>
                  {followCounts.followingCount}個
                </span>
                <span>跟隨中</span>
              </Link>
              <Link to="/followlist" className={styles.followingInfoBtn}>
                <span className={styles.followNum}>
                  {followCounts.followerCount}位
                </span>
                <span>跟隨者</span>
              </Link>
            </span>
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
