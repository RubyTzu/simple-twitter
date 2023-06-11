import { ReactComponent as BackSVG } from "assets/Back.svg";
import { ReactComponent as LetterIcon } from "assets/letterIcon.svg";
import { ReactComponent as NotifIcon } from "assets/notifIcon.svg";
import userotherBcg from "assets/userotherBcg.svg";
import userotherAvatar from "assets/userotherAvatar.svg";
// import { UserTweetsCollection } from "components/UserTweetsCollection";
import styles from "./UserOtherPage.module.scss";
import { Link } from "react-router-dom";


export const UserOtherPage = () => {
  return (
    <>
      <div className={styles.mainbarContainer}>
        <header className={styles.userPageHeader}>
          <Link to="/home">
            <BackSVG className={styles.logo} />
          </Link>
          <div className={styles.userPageHeaderText}>
            <p className={styles.userPageTitle}>Jane Cathy</p>
            <p className={styles.userPageTweetCounts}>25 推文</p>
          </div>
        </header>
        <div className={styles.userinfoContainer}>
          <img className={styles.userBcgImage} src={userotherBcg} alt="" />
          <img className={styles.userAvatar} src={userotherAvatar} alt="" />
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
              <b>Jane Cathy</b>
            </span>
            <span className={styles.nickName}>@iamjane1999</span>
            <span className={styles.description}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.{" "}
            </span>
            <span className={styles.follow}>
              <Link to="/followlist" className={styles.followerInfoBtn}>
                <span className={styles.followNum}>231個</span>
                <span>跟隨中</span>
              </Link>
              <Link to="/followlist" className={styles.followingInfoBtn}>
                <span className={styles.followNum}>45位</span>
                <span>跟隨者</span>
              </Link>
            </span>
          </div>
        </div>
        {/* <UserTweetsCollection/> */}
      </div>
    </>
  );
};
