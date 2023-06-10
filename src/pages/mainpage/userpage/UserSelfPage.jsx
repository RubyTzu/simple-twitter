import { ReactComponent as BackSVG } from "assets/Back.svg";
import userselfAvatar from "assets/userselfAvatar.svg";
import userselfBcg from "assets/userselfBcg.svg";
import styles from "./UserSelfPage.module.scss";
import { Link } from "react-router-dom";
import { UserTweetsCollection } from "components/UserTweetsCollection";
import { InfoEditModal } from "components/modals/InfoEditModal";
import { useEffect, useState } from "react";
import { getUserLikedTweets, getUserReplies, getUserTweets } from "api/tweet";

export const UserSelfPage = () => {
  const [tweets, setTweets] = useState([]);
  const [replies, setReplies] = useState([]);
  const [likedTweets, setLikedTweets] = useState([]);
  useEffect(() => {
    //推文tab
    const showUserTweets = async () => {
      setTweets(await getUserTweets());
    };

    //回覆tab
    const showUserReplies = async () => {
      setReplies(await getUserReplies());
    };
    //喜歡的內容tab
    const likedTweets = async () => {
      setLikedTweets(await getUserLikedTweets());
    };
    showUserTweets();
    showUserReplies();
    likedTweets();
  }, []);

  return (
    <>
      <div className={styles.mainbarContainer}>
        <header className={styles.userPageHeader}>
          <Link to="/home">
            <BackSVG className={styles.logo} />
          </Link>
          <div className={styles.userPageHeaderText}>
            <p className={styles.userPageTitle}>John Doe</p>
            <p className={styles.userPageTweetCounts}>25 推文</p>
          </div>
        </header>
        <div className={styles.userinfoContainer}>
          <img className={styles.userBcgImage} src={userselfBcg} alt="" />
          <img className={styles.userAvatar} src={userselfAvatar} alt="" />
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
              <b>John Doe</b>
            </span>
            <span className={styles.nickName}>@heyjogn</span>
            <span className={styles.description}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.{" "}
            </span>
            <span className={styles.follow}>
              <div className={styles.followerInfoBtn}>
                <span className={styles.followNum}>34個</span>
                <span>跟隨中</span>
              </div>
              <div className={styles.followingInfoBtn}>
                <span className={styles.followNum}>59位</span>
                <span>跟隨者</span>
              </div>
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
