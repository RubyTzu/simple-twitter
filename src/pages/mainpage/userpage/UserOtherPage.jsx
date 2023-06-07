import { ReactComponent as BackSVG } from "assets/Back.svg";
import { Navbar } from "components/Navbar";
import { Rightbar } from "components/Rightbar";
import styles from "./UserOtherPage.module.scss";
import { ReactComponent as LetterIcon } from "assets/letterIcon.svg";
import { ReactComponent as NotifIcon } from "assets/notifIcon.svg";
import userotherBcg from "assets/userotherBcg.svg";
import userotherAvatar from "assets/userotherAvatar.svg";
import { Link } from "react-router-dom";

export const UserOtherPage = () => {
  return (
    <div className={styles.mainPageContainer}>
      <Navbar />
      <div className={styles.mainbarContainer}>
        <header className={styles.userPageHeader}>
          <Link className={styles.link} to="/home">
            <BackSVG className={styles.logo} />
          </Link>
          <div className={styles.userPageHeaderText}>
            <p className={styles.userPageTitle}>Other User</p>
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
            <br />
            <span className={styles.nickName}>@iamjane1999</span>
            <p className={styles.description}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.{" "}
            </p>
            <div className={styles.follow}>
              <div className={styles.followerInfoBtn}>
                <span className={styles.followNum}>231個</span>
                <span>跟隨中</span>
              </div>
              <div className={styles.followingInfoBtn}>
                <span className={styles.followNum}>45位</span>
                <span>跟隨者</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Rightbar />
    </div>
  );
};
