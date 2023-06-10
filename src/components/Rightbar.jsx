import { ReactComponent as GreyIconSVG } from "assets/GreyIcon.svg";
import styles from "./Rightbar.module.scss";
import { Link } from "react-router-dom";

export const Rightbar = () => {
  return (
    <div className={styles.rightbarContainer}>
      <div className={styles.popularbarContainer}>
        <h1 className={styles.RightbarTitle}>推薦跟隨</h1>

        <div className={styles.popularUserCollection}>
          <div className={styles.popularUser}>
            <GreyIconSVG
              className={`${styles.popularUserAvatar} cursorPointer`}
            />
            <div className={styles.userInfos}>
              <p className={styles.popularUserName}>Pizza Hut</p>
              <Link className={styles.popularUserNickName} to="#">
                @pizzahut
              </Link>
            </div>
            <button className={styles.toNotFollowButton}>正在跟隨</button>
          </div>

          <div className={styles.popularUser}>
            <GreyIconSVG
              className={`${styles.popularUserAvatar} cursorPointer`}
            />

            <div className={styles.userInfos}>
              <p className={styles.popularUserName}>McDonald</p>
              <Link className={styles.popularUserNickName} to="#">
                @McDonald
              </Link>
            </div>
            <button className={styles.toNotFollowButton}>正在跟隨</button>
          </div>

          <div className={styles.popularUser}>
            <GreyIconSVG
              className={`${styles.popularUserAvatar} cursorPointer`}
            />

            <div className={styles.userInfos}>
              <p className={styles.popularUserName}>Bank</p>
              <Link className={styles.popularUserNickName} to="#">
                @Bank
              </Link>
            </div>
            <button className={styles.toFollowButton}>跟隨</button>
          </div>

          <div className={styles.popularUser}>
            <GreyIconSVG
              className={`${styles.popularUserAvatar} cursorPointer`}
            />

            <div className={styles.userInfos}>
              <p className={styles.popularUserName}>L'Oréal</p>
              <Link className={styles.popularUserNickName} to="#">
                @Loreal
              </Link>
            </div>
            <button className={styles.toFollowButton}>跟隨</button>
          </div>

          <div className={styles.popularUser}>
            <GreyIconSVG
              className={`${styles.popularUserAvatar} cursorPointer`}
            />

            <div className={styles.userInfos}>
              <p className={styles.popularUserName}>Nintendo</p>
              <Link className={styles.popularUserNickName} to="#">
                @Nintendo
              </Link>
            </div>
            <button className={styles.toFollowButton}>跟隨</button>
          </div>

          <div className={styles.popularUser}>
            <GreyIconSVG
              className={`${styles.popularUserAvatar} cursorPointer`}
            />

            <div className={styles.userInfos}>
              <p className={styles.popularUserName}>MasterCard</p>
              <Link className={styles.popularUserNickName} to="#">
                @MasterCard
              </Link>
            </div>
            <button className={styles.toFollowButton}>跟隨</button>
          </div>

          <div className={styles.popularUser}>
            <GreyIconSVG
              className={`${styles.popularUserAvatar} cursorPointer`}
            />

            <div className={styles.userInfos}>
              <p className={styles.popularUserName}>Nike</p>
              <Link className={styles.popularUserNickName} to="#">
                @Nike
              </Link>
            </div>
            <button className={styles.toFollowButton}>跟隨</button>
          </div>

          <div className={styles.popularUser}>
            <GreyIconSVG
              className={`${styles.popularUserAvatar} cursorPointer`}
            />

            <div className={styles.userInfos}>
              <p className={styles.popularUserName}>Adidas</p>
              <Link className={styles.popularUserNickName} to="#">
                @Nike
              </Link>
            </div>
            <button className={styles.toFollowButton}>跟隨</button>
          </div>
        </div>
      </div>
    </div>
  );
};
