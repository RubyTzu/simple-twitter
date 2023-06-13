import GreyIcon from "assets/GreyIcon.svg";
import { ReactComponent as CommentSVG } from "assets/Comment.svg";
import { ReactComponent as LikeSVG } from "assets/Like.svg";
import styles from "./Tweets.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AddReplyModal } from "./modals/AddReplyModal";
import { createReplyTweet } from "../api/tweet";

const getId = () => {
  const id = localStorage.getItem("id");
  return Number(id);
};

export const Tweet = ({ value }) => {
  let navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
const [selectTweetId, setSelectTweetId] = useState(104);

 const handleAddTweet = async () => {
   if (inputValue.length === 0 || inputValue.length > 140) {
     return;
   } else {
     await createReplyTweet({
       comment: inputValue,
       id: selectTweetId,
     });

     const reload = () => window.location.reload();
     reload();
   }
 };  


  return (
    <div
      className={styles.openReplyList}
      onClick={() => navigate(`/replylist/${value.id}`)}
    >
      <div className={styles.tweetContainer}>
        {getId() === value.UserId ? (
          <Link to={`/userself/${value.UserId}`}>
            <img
              data-id={value.UserId}
              className={`${styles.userAvatar} cursorPointer`}
              src={GreyIcon}
              alt="GreyIcon"
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
              src={GreyIcon}
              alt="GreyIcon"
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
          </Link>
        )}
        <div className={styles.tweetTextContainer}>
          <header className={styles.tweetHeader}>
            <p className={styles.userName}>{value.name}</p>
            <p className={styles.userNickName}>{`@${value.name}・3小時`}</p>
          </header>
          <p className={styles.comment}>{value.description}</p>
          <footer className={styles.tweetFooter}>
            <Link
              type="Link"
              className={`${styles.replyButton}`}
              data-bs-toggle="modal"
              data-bs-target={`#addReplyModal${value.id}`}
              onClick={(e) => {
                e.stopPropagation();
                setSelectTweetId(value.id);
                console.log(value.id);
                console.log(`comment button :${selectTweetId}`);
              }}
            >
              <CommentSVG className={styles.commentIcon} />
              <p className={styles.counts}>{value.likesCount}</p>
            </Link>
            <AddReplyModal
              onClick={handleAddTweet}
              onChange={(value) => {
                setInputValue(value);
              }}
              inputValue={inputValue}
              tweetId={value.id}
            />
            <Link
              className={styles.likeButton}
              href="/"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <LikeSVG className={styles.likeIcon} />
              <p className={styles.counts}>{value.repliesCount}</p>
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
};

// 這個好像都沒用到?
// export const Tweets = ({ value }) => {
//   console.log(value);
//   return (
//     <div className={styles.tweetsCollection}>
//       <Tweet value={value} />
//     </div>
//   );
// };

export const UserTweets = ({ value }) => {
  return (
    <div className={styles.tweetsCollection}>
      {value.map((tweet) => {
        return <Tweet key={tweet.id} value={tweet} />;
      })}
    </div>
  );
};

export const UserLikeTweets = ({ value }) => {
  return (
    <div className={styles.tweetsCollection}>
      {value.map((tweet) => {
        return <Tweet key={tweet.id} value={tweet} />;
      })}
    </div>
  );
};
