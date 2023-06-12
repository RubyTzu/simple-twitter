import { ReactComponent as GreyIconSVG } from "assets/GreyIcon.svg";
import styles from "./Followings.module.scss";


export const Following = () => {
 return (
   <div className={styles.followContainer}>
     <GreyIconSVG className={`${styles.userAvatar} cursorPointer`} />
     <div className={styles.followTextContainer}>
       <header className={styles.followHeader}>
         <p className={styles.userName}>Apple</p>
         <button className={styles.toNotFollowButton}>正在跟隨</button>
       </header>
       <p className={styles.comment}>
         Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
         cillum dolor. Voluptate exercitation incididunt aliquip deserunt
         reprehenderit elit laborum.
       </p>
     </div>
   </div>
 );
};

export const Followings = () => {
    return (
      <div className={styles.followsCollection}>
        <Following />
        <Following />
        <Following />
        <Following />
        <Following />
      </div>
    )
}