import { ReactComponent as BackSVG } from "assets/Back.svg";
import { ReactComponent as LetterIcon } from "assets/letterIcon.svg";
import { ReactComponent as NotifIcon } from "assets/notifIcon.svg";
import userotherBcg from "assets/userotherBcg.svg";
import userotherAvatar from "assets/userotherAvatar.svg";
import styles from "./UserOtherPage.module.scss";
import { Link, useParams } from "react-router-dom";
import { UserTweetsCollection } from "components/UserTweetsCollection";
import { useEffect, useState } from "react";
import { getUserLikedTweets, getUserReplies, getUserTweets } from "api/tweet";
import { getFollowCounts, getProfile } from "api/userinfo";

export const UserOtherPage = () => {
  const [profile, setProfile] = useState([]);
  const [followCounts, setFollowCounts] = useState([]);
  const [tweets, setTweets] = useState([]);
  const [replies, setReplies] = useState([]);
  const [likedTweets, setLikedTweets] = useState([]);
  const { userId } = useParams();

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
          <Link to="/home">
            <BackSVG className={styles.logo} />
          </Link>
          <div className={styles.userPageHeaderText}>
            <p className={styles.userPageTitle}>{profile.name}</p>
            <p className={styles.userPageTweetCounts}>
              {profile.tweetCounts} 推文
            </p>
          </div>
        </header>
        <div className={styles.userinfoContainer}>
          <img
            className={styles.userBcgImage}
            src={
              profile.coverPhoto === null ? userotherBcg : profile.coverPhoto
            }
            alt=""
          />
          <img
            className={styles.userAvatar}
            src={profile.avatar === null ? userotherAvatar : profile.avatar}
            alt=""
          />
          <div className={styles.userinfoBtnContainer}>
            <div className={styles.userinfoBtn}>
              <LetterIcon className={styles.icon} />
            </div>
            <div className={styles.userinfoBtn}>
              <NotifIcon className={styles.icon} />
            </div>
            <div className={styles.isFollowingBtn}>正在跟隨</div>
          </div>
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
                  {followCounts.followingCount} 個
                </span>
                <span>跟隨中</span>
              </Link>
              <Link to="/followlist" className={styles.followingInfoBtn}>
                <span className={styles.followNum}>
                  {followCounts.followerCount} 位
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
