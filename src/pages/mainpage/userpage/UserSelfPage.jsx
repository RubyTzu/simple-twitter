import { ReactComponent as BackSVG } from "assets/Back.svg";
import userselfAvatar from "assets/GreyIcon.svg";
import userselfBcg from "assets/userselfBcg.svg";
import styles from "./UserSelfPage.module.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserTweetsCollection } from "components/UserTweetsCollection";
import { InfoEditModal } from "components/modals/InfoEditModal";
import { useEffect } from "react";
import { getUserLikedTweets, getUserReplies, getUserTweets } from "api/tweet";
import { useTweet } from "context/tweetContext";
import { useCurrentUser } from "context/userInfoContext";
import { getFollowCounts, getProfile } from "api/userinfo";
import { LoadingIcon } from "components/loadingItems/LoadingIcon";
import { LoadingDots } from "components/loadingItems/LoadingDots";

export const UserSelfPage = () => {
  const { profile, setProfile, followCounts, setFollowCounts } =
    useCurrentUser();

  const {
    setUserTweets,
    setUserReplies,
    setUserLikedTweets,
    addTweetRefresh,
    setUserTweetsDataLoaded,
    setUserRepliesDataLoaded,
    setUserLikedTweetsDataLoaded,
  } = useTweet();

  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setProfile(await getProfile(userId));
      setFollowCounts(await getFollowCounts(userId));
      setUserTweets(await getUserTweets(userId));
      setUserReplies(await getUserReplies(userId));
      setUserLikedTweets(await getUserLikedTweets(userId));
      setUserTweetsDataLoaded(true);
      setUserRepliesDataLoaded(true);
      setUserLikedTweetsDataLoaded(true);
      console.log(`useEffect from userSelfPage: id: ${userId}`);
    })();
  }, [
    userId,
    setUserLikedTweets,
    setUserReplies,
    setUserTweets,
    addTweetRefresh,
    setProfile,
    setFollowCounts,
    setUserTweetsDataLoaded,
    setUserRepliesDataLoaded,
    setUserLikedTweetsDataLoaded,
  ]);

  return (
    <>
      {Number(userId) === profile.id ? (
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
                console.log(profile);
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
                  to={`/followlist/${userId}`}
                  state={"正在追隨"}
                  className={styles.followerInfoBtn}
                >
                  <span className={styles.followNum}>
                    {followCounts.followingCount} 個
                  </span>
                  <span>跟隨中</span>
                </Link>
                <Link
                  to={`/followlist/${userId}`}
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
          <UserTweetsCollection />
        </div>
      ) : (
        <div className={styles.mainbarContainer}>
          <header className={styles.userPageHeader}>
            <Link onClick={() => navigate(-1)}>
              <BackSVG className={styles.logo} />
            </Link>
            <div className={styles.userPageHeaderText}>
              <div className={styles.userPageTitleLoading}>
                <LoadingDots />
              </div>
              <p className={styles.userPageTweetCounts}></p>
            </div>
          </header>
          <div className={styles.userinfoContainer}>
            <div className={styles.userBcgImageLoading}>
              <LoadingDots />
            </div>
            <div className={styles.userAvatarLoading}>
              <div className={styles.Loading}>
                <LoadingDots />
              </div>
            </div>
            <button type="button" className={`${styles.editUserinfoBtn}`}>
              載入中
            </button>
            <div className={styles.userinfoLoading}>
              <div className={styles.Loading}>
                <LoadingDots />
              </div>
            </div>
          </div>
          <div className={styles.tweetsCollectionLoading}>
            <LoadingIcon />
          </div>
        </div>
      )}
    </>
  );
};
