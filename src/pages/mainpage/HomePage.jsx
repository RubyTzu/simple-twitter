import initialAvatar from "assets/GreyIcon.svg";
import { Tweet } from "components/Tweets";
import VirtualScroller from "../../components/loadingItems/VirtualScroller";
import { LoadingIcon } from "components/loadingItems/LoadingIcon";
import styles from "./HomePage.module.scss";
import { useEffect } from "react";
import { useTweet } from "context/tweetContext";
import { useCurrentUser } from "context/userInfoContext";
import { getProfile } from "api/userinfo";

const id = localStorage.getItem("id");

export const HomePage = () => {
  const {
    allTweets,
    allTweetsDataLoaded,
    inputValue,
    setInputValue,
    showAlert,
    setShowAlert,
    onInput,
    onAddTweetClick,
  } = useTweet();
  const { profile, setProfile } = useCurrentUser();

  useEffect(() => {
    (async () => setProfile(await getProfile(id)))();
  }, [setProfile]);

  const SETTINGS = {
    itemHeight: 170, //153px + 16(margin-top) + 1(border-bottom)
    tolerance: 2,
    amount: 7, //避免拉視窗拉開沒有render，至少要6個tweet以上
    minIndex: 0,
    maxIndex: allTweets.length - 1, //index從0開始所以要減一
    startIndex: 0,
  };

  const getData = (offset, limit) => {
    const start = Math.max(SETTINGS.minIndex, offset);
    const end = Math.min(offset + limit - 1, SETTINGS.maxIndex);
    // console.log(
    //   `request [${offset}..${offset + limit - 1}] -> [${start}..${end}] items`
    // );
    const slicedData = allTweets.slice(start, end);

    return slicedData;
  };
  
  const TweetInRow = (value) => {
    return <Tweet value={value} key={value.id} />;
  }

  return (
    <>
      <div className={styles.mainbarContainer}>
        <h1 className={styles.homePageTitle}>首頁</h1>
        <div className={styles.addTweetSection}>
          <img
            className={styles.addTweetAvatar}
            src={profile.avatar ? profile.avatar : initialAvatar}
            alt="avatar"
          ></img>
          <div className={styles.addTweetSpace}>
            <textarea
              className={styles.addTweetTextarea}
              placeholder="有什麼新鮮事？"
              value={inputValue}
              onInput={onInput}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />

            <div className={styles.addTweetSpacefooter}>
              <p className={styles.wordLimitHint}>
                {showAlert && inputValue.length === 0 && "內容不可空白"}
                {showAlert && inputValue.length > 140 && "字數不可超過 140 字"}
              </p>
              <button
                className={`${styles.tweetButton} cursorPointer`}
                onClick={() => {
                  if (inputValue.length === 0 || inputValue.length > 140) {
                    setShowAlert(true);
                  } else {
                    onAddTweetClick();
                  }
                }}
              >
                推文
              </button>
            </div>
          </div>
        </div>
        {allTweetsDataLoaded ? (
          <VirtualScroller
            className={styles.tweetsCollection}
            settings={SETTINGS}
            get={getData}
            row={TweetInRow}
          />
        ) : (
          <LoadingIcon />
        )}
      </div>
    </>
  );
};

//<div className={styles.tweetsCollection}>
  //{allTweets.map((tweet) => {
    //return <Tweet key={tweet.id} value={tweet} />;
  //})}
//</div>