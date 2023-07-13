import userInitialAvatar from "assets/GreyIcon.svg";
import styles from "./TweetsReadOnly.module.scss";
import { Link, useParams } from "react-router-dom";
import { useTweet } from "context/tweetContext";
import VirtualScroller from "../components/loadingItems/VirtualScroller";
import { LoadingIcon } from "components/loadingItems/LoadingIcon";
import { useEffect } from "react";

const id = localStorage.getItem("id");

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
    <>
      {value.UserId ? (
        <div className={styles.tweetContainer}>
          {Number(id) === value.UserId ? (
            <Link
              to={`/userself/${value.UserId}`}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <img
                data-id={value.UserId}
                className={`${styles.userAvatar} cursorPointer`}
                src={
                  value.repliedUserAvatar === null
                    ? userInitialAvatar
                    : value.repliedUserAvatar
                }
                alt="userAvatar"
              />
            </Link>
          ) : (
            <Link
              to={`/userother/${value.UserId}`}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <img
                data-id={value.UserId}
                className={`${styles.userAvatar} cursorPointer`}
                src={
                  value.repliedUserAvatar === null
                    ? userInitialAvatar
                    : value.repliedUserAvatar
                }
                alt="userAvatar"
              />
            </Link>
          )}
          <div className={styles.tweetTextContainer}>
            <header className={styles.tweetHeader}>
              <p className={styles.userName}>{value.repliedUserName}</p>
              <p className={styles.nickNameTime}>
                <Link className={styles.userNickNameLink}>
                  <span className={styles.userNickName}>
                    @{value.repliedUserAccount}
                  </span>
                  <span className={styles.userTime}>
                    ・{formatTimestamp(value.createdAt)}
                  </span>
                </Link>
              </p>
            </header>
            <p className={styles.replyTo}>
              回覆{" "}
              <Link className={styles.replyNickNameLink}>
                <span className={styles.replyNickName}>
                  @{value.tweetUserAccount}
                </span>
              </Link>
            </p>
            <p className={styles.comment}>{value.comment}</p>
          </div>
        </div>
      ) : (
        <LoadingIcon />
      )}
    </>
  );
};

export const UserReplyTweets = () => {
  const { userReplies, userRepliesDataLoaded } = useTweet();
  const { userId } = useParams();

  useEffect(() => {
    console.log(`userId in UserTweets ${userId}`);
  }, [userId]);

  const SETTINGS = {
    itemHeight: 170, //153px + 16(margin-top) + 1(border-bottom)
    tolerance: 2,
    amount: 7, //避免拉視窗拉開沒有render，至少要6個tweet以上
    minIndex: 0,
    maxIndex: userReplies.length - 1, //index從0開始所以要減一
    startIndex: 0,
  };

  const getData = (offset, limit) => {
    const start = Math.max(SETTINGS.minIndex, offset);
    const end = Math.min(offset + limit - 1, SETTINGS.maxIndex);
    // console.log(
    //   `request [${offset}..${offset + limit - 1}] -> [${start}..${end}] items`
    // );
    const slicedData = userReplies.slice(start, end);

    return slicedData;
  };

  const TweetInRow = (value) => {
    return <TweetReadOnly value={value} key={value.id} />;
  };

  if (!userReplies) return <p>userReplies not found</p>;
  return (
    <>
      {userRepliesDataLoaded && Number(userId) === userReplies[0].UserId ? (
        <VirtualScroller
          className={styles.tweetsCollection}
          settings={SETTINGS}
          get={getData}
          row={TweetInRow}
        />
      ) : (
        <LoadingIcon />
      )}
    </>
  );
};
