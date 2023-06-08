import { ReactComponent as BackSVG } from "assets/Back.svg";
import { Navbar } from "components/Navbar";
import { Rightbar } from "components/Rightbar";
import userselfAvatar from "assets/userselfAvatar.svg";
import userselfBcg from "assets/userselfBcg.svg";
import styles from "./UserSelfPage.module.scss"
import { Link } from "react-router-dom";
import { UserTweetsCollection } from "components/UserTweetsCollection";

export const UserSelfPage = () => {
  return (
    <div className={styles.mainPageContainer}>
      <Navbar />
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
          <div className={styles.editUserinfoBtn}>編輯個人資料</div>
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
        <UserTweetsCollection />
      </div>
      <Rightbar />
    </div>
  );
};
