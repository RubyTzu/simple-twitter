import { ReactComponent as GreyIconSVG } from "assets/GreyIcon.svg";
import styles from "./Followers.module.scss";
// import { addFollow } from "api/follow";
// import { useState } from "react";
// import { addFollow, deleteFollow } from "api/follow";
// import { useState } from "react";

export const Follower = ({ value }) => {
  // const [following, setFollowing] = useState(
  //   value.Followship.followingId === value.id
  // );
  // const [idFromButtonClick, setIdFromButtonClick] = useState(null);

  // const handleAddFollowing = async (userId) => {
  //   console.log(`add following ${userId}`);
  //   try {
  //     await addFollow(userId);
  //     setIdFromButtonClick(userId);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const handleCancelFollowing = async (userId) => {
  //   console.log(`cancel following ${userId}`);
  //   try {
  //     await deleteFollow(userId);
  //     setIdFromButtonClick(userId);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <div className={styles.followContainer}>
      <GreyIconSVG className={`${styles.userAvatar} cursorPointer`} />
      <div className={styles.followTextContainer}>
        <header className={styles.followHeader}>
          <p className={styles.userName}>{value.name}</p>
          <button
            className={
              value.isFollowing
                ? styles.toFollowButton
                : styles.toNotFollowButton
            }
            onClick={async () => {
              // const res = await addFollow(value.id);
              // console.log(res);
            }}
            // onClick={async () => {
            //   const reload = () => window.location.reload();
            //   if (!value.isFollowing) {
            //     const res = await handleAddFollowing(value.id);
            //     console.log(res);
            //     // reload();
            //   } else {
            //     const res = await handleCancelFollowing(value.id);
            //     console.log(res);
            //     // reload();
            //   }
            //   setIdFromButtonClick(Date.now());
            //   // handleClick(value.id);
            //   reload();
            // }}
          >
            {value.isFollowing ? "正在跟隨" : "跟隨"}
          </button>
        </header>
        <p className={styles.comment}>{value.introduction}</p>
      </div>
    </div>
  );
};

export const Followers = ({ followers }) => {
  return (
    <div className={styles.followsCollection}>
      {followers.map((follower) => {
        return <Follower key={follower.id} value={follower} />;
      })}
    </div>
  );
};
