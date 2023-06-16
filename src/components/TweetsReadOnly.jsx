import userInitialAvatar from "assets/GreyIcon.svg";
import styles from "./TweetsReadOnly.module.scss";
import { Link } from "react-router-dom";

const getId = () => {
  const id = localStorage.getItem("id");
  return Number(id);
};

export const TweetReadOnly = ({ value }) => {
  const formatTimestamp = (timestamp) => {
    const now = new Date();
    const timestampDate = new Date(timestamp);
    const timeDifference = now - timestampDate;
    const hours = Math.floor(timeDifference / 3600000);
    const minutes = Math.floor(timeDifference / 60000);

    // 檢查是否剛剛發布
    if (timeDifference < 60000) {
      // 60000 毫秒 = 1 分鐘
      return "剛才";
    } else if (timeDifference < 3600000) {
      // 3600000 毫秒 = 1 小時
      return minutes + "分鐘";
    } else if (timeDifference < 86400000) {
      // 86400000 毫秒 = 24 小時
      return hours + "小時";
    }

    const formattedDate = timestampDate.toLocaleDateString("zh-TW", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return formattedDate;
    // return formattedDate;
    // 範例使用
    // const timestamp = "2023-06-13T06:07:56.000Z";
    // const formattedTimestamp = formatTimestamp(timestamp);
    // console.log(formattedTimestamp);
  };

  return (
    <div className={styles.tweetContainer}>
      {getId() === value.UserId ? (
        <Link to={`/userself/${value.UserId}`}>
          <img
            data-id={value.UserId}
            className={`${styles.userAvatar} cursorPointer`}
            src={
              value.repliedUserAvatar === null
                ? userInitialAvatar
                : value.repliedUserAvatar
            }
            alt="userAvatar"
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        </Link>
      ) : (
        <Link to={`/userother/${value.UserId}`}>
          <img
            data-id={value.UserId}
            className={`${styles.userAvatar} cursorPointer`}
            src={
              value.repliedUserAvatar === null
                ? userInitialAvatar
                : value.repliedUserAvatar
            }
            alt="userAvatar"
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        </Link>
      )}
      <div className={styles.tweetTextContainer}>
        <header className={styles.tweetHeader}>
          <p className={styles.userName}>{value.repliedUserName}</p>
          <p className={styles.nickNameTime}>
            <Link className={styles.userNickName}>
              @{value.repliedUserAccount}
            </Link>
            ・{formatTimestamp(value.createdAt)}
          </p>
        </header>
        <p className={styles.replyTo}>
          回覆{" "}
          <Link className={styles.replyNickName}>
            @{value.tweetUserAccount}
          </Link>
        </p>
        <p className={styles.comment}>{value.comment}</p>
      </div>
    </div>
  );
};

export const TweetsReadOnly = ({ value }) => {
  return (
    <div className={styles.replyTweetsCollection}>
      {value.map((reply) => {
        return <TweetReadOnly key={reply.id} value={reply} />;
      })}
    </div>
  );
};

export const UserReplyTweets = ({ value }) => {
  if (!value) return;
  return (
    <div className={styles.tweetsCollection}>
      {value.map((tweet, i) => {
        return <TweetReadOnly value={tweet} key={i} />;
      })}
    </div>
  );
};
