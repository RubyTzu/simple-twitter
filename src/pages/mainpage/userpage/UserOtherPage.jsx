import { ReactComponent as BackSVG } from "assets/Back.svg";
import { ReactComponent as LetterIcon } from "assets/letterIcon.svg";
import { ReactComponent as NotifIcon } from "assets/notifIcon.svg";
import userotherAvatar from "assets/GreyIcon.svg";
import userotherBcg from "assets/userselfBcg.svg";
import styles from "./UserOtherPage.module.scss";
import { Link, useParams, useNavigate } from "react-router-dom";
import { UserTweetsCollection } from "components/UserTweetsCollection";
import { useEffect, useState } from "react";
import { getUserLikedTweets, getUserReplies, getUserTweets } from "api/tweet";
import { getFollowCounts, getProfile } from "api/userinfo";
import { addFollow, deleteFollow } from "api/follow";
import { useAuth } from "context/authContext";
import { useTweet } from "context/tweetContext";
import { useCurrentUser } from "context/userInfoContext";

export const UserOtherPage = () => {

  const { setUserTweets, setUserReplies, setUserLikedTweets, addTweetRefresh } =
    useTweet();
  const { profile, setProfile, followCounts, setFollowCounts } =
    useCurrentUser();
  const { userId } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    } else return;
  }, [isAuthenticated, navigate]);

  const handleAddFollowing = async (userId) => {
    console.log(`add following ${userId}`);
    try {
      await addFollow(userId);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelFollowing = async (userId) => {
    console.log(`cancel following ${userId}`);
    try {
      await deleteFollow(userId);
    } catch (error) {
      console.error(error);
    }
  };



  useEffect(() => {
    const showPage = async () => {
      setProfile(await getProfile(userId));
      setFollowCounts(await getFollowCounts(userId));
      setUserTweets(await getUserTweets(userId));
      setUserReplies(await getUserReplies(userId));
      setUserLikedTweets(await getUserLikedTweets(userId));
    };
    showPage();
    console.log("hello from useEffect-UserOtherPage");
  }, [
    userId,
    setUserLikedTweets,
    setUserReplies,
    setUserTweets,
    addTweetRefresh
    setFollowCounts,
    setProfile,

  ]);

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
              {profile.tweetCounts} 推文
            </p>
          </div>
        </header>
        <div className={styles.userinfoContainer}>
          <img
            className={styles.userBcgImage}
            src={
              profile.coverPhoto === null || profile.coverPhoto === "null"
                ? userotherBcg
                : profile.coverPhoto
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
            {/* <button className={styles.toNotFollowButton}>正在跟隨</button> */}
            <button
              className={
                profile.isFollowing
                  ? styles.toNotFollowButton
                  : styles.toFollowButton
              }
              onClick={async () => {
                const reload = () => window.location.reload();
                if (!profile.isFollowing) {
                  await handleAddFollowing(profile.id);
                  reload();
                } else {
                  await handleCancelFollowing(profile.id);
                  reload();
                }
                reload();
              }}
            >
              {profile.isFollowing ? "正在跟隨" : "跟隨"}
            </button>
          </div>
          <div className={styles.userinfo}>
            <div>
              <b>{profile.name}</b>
            </div>
            <div className={styles.nickName}>@{profile.account}</div>
            <div className={styles.description}>
              {profile.introduction === null
                ? "沒內容欸"
                : profile.introduction}
            </div>
            <div className={styles.follow}>
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
            </div>
          </div>
        </div>
        <UserTweetsCollection />
      </div>
    </>
  );
};
