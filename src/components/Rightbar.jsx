import styles from "./Rightbar.module.scss";
import { ReactComponent as GreyIconSVG } from "assets/GreyIcon.svg";

export const Rightbar = () => {
  return (
    <div className={styles.rightbarContainer}>
      <div className={styles.popularbarContainer}>
        <h1 className={styles.RightbarTitle}>推薦跟隨</h1>

        <div className={styles.popularUserCollection}>
          <div className={styles.popularUser}>
            <GreyIconSVG className={`${styles.popularUserAvatar} ${styles.cursorPointer}`} />
            <div className={styles.userInfos}>
              <p className={styles.popularUserName}>Pizza Hut</p>
              <a className={styles.popularUserNickName} href="/">
                @pizzahut
              </a>
            </div>
            <button className={styles.toNotFollowButton}>正在跟隨</button>
          </div>

          <div className={styles.popularUser}>
            <GreyIconSVG className={`${styles.popularUserAvatar} ${styles.cursorPointer}`} />

            <div className={styles.userInfos}>
              <p className={styles.popularUserName}>McDonald</p>
              <a className={styles.popularUserNickName} href="/">
                @McDonald
              </a>
            </div>
            <button className={styles.toNotFollowButton}>正在跟隨</button>
          </div>

          <div className={styles.popularUser}>
            <GreyIconSVG className={`${styles.popularUserAvatar} ${styles.cursorPointer}`} />

            <div className={styles.userInfos}>
              <p className={styles.popularUserName}>Bank</p>
              <a className={styles.popularUserNickName} href="/">
                @Bank
              </a>
            </div>
            <button className={styles.toFollowButton}>跟隨</button>
          </div>

          <div className={styles.popularUser}>
            <GreyIconSVG className={`${styles.popularUserAvatar} ${styles.cursorPointer}`} />

            <div className={styles.userInfos}>
              <p className={styles.popularUserName}>L'Oréal</p>
              <a className={styles.popularUserNickName} href="/">
                @Loreal
              </a>
            </div>
            <button className={styles.toFollowButton}>跟隨</button>
          </div>

          <div className={styles.popularUser}>
            <GreyIconSVG className={`${styles.popularUserAvatar} ${styles.cursorPointer}`} />

            <div className={styles.userInfos}>
              <p className={styles.popularUserName}>Nintendo</p>
              <a className={styles.popularUserNickName} href="/">
                @Nintendo
              </a>
            </div>
            <button className={styles.toFollowButton}>跟隨</button>
          </div>

          <div className={styles.popularUser}>
            <GreyIconSVG className={`${styles.popularUserAvatar} ${styles.cursorPointer}`} />

            <div className={styles.userInfos}>
              <p className={styles.popularUserName}>MasterCard</p>
              <a className={styles.popularUserNickName} href="/">
                @MasterCard
              </a>
            </div>
            <button className={styles.toFollowButton}>跟隨</button>
          </div>

          <div className={styles.popularUser}>
            <GreyIconSVG className={`${styles.popularUserAvatar} ${styles.cursorPointer}`} />

            <div className={styles.userInfos}>
              <p className={styles.popularUserName}>Nike</p>
              <a className={styles.popularUserNickName} href="/">
                @Nike
              </a>
            </div>
            <button className={styles.toFollowButton}>跟隨</button>
          </div>

          <div className={styles.popularUser}>
            <GreyIconSVG className={`${styles.popularUserAvatar} ${styles.cursorPointer}`} />

            <div className={styles.userInfos}>
              <p className={styles.popularUserName}>Adidas</p>
              <a className={styles.popularUserNickName} href="/">
                @Nike
              </a>
            </div>
            <button className={styles.toFollowButton}>跟隨</button>
          </div>
        </div>
      </div>
    </div>
  );
};
