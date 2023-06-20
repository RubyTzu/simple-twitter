import { UserLikeTweets, UserTweets } from "components/Tweets";
import { UserReplyTweets } from "components/TweetsReadOnly";
import styles from "./UserTweetsCollection.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
const types = [
  { dataType: "tweets", name: "推文" },
  { dataType: "reply-tweets", name: "回覆" },
  { dataType: "like-tweets", name: "喜歡的內容" },
];

export const UserTweetsCollection = () => {
  let typeInfos = types;
  const [activeLink, setActiveLink] = useState("推文");
  const handleClick = (e) => {
    setActiveLink(e.target.innerText);
  };

  return (
    <section className={styles.tweetListsContainer} data-type="1">
      <ul className={styles.tweetListsNavbar}>
        {typeInfos.map((info) => {
          const linkClassName = `${styles.tweetListButton} ${
            activeLink === info.name ? styles.active : ""
          }`;

          return (
            <li key={info.dataType}>
              <Link className={linkClassName} href="#" onClick={handleClick}>
                {info.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <section className={styles.tweetListContainer}>
        {typeInfos.map((info) => {
          if (info.name === "推文" && activeLink === info.name) {
            return <UserTweets key={info.dataType} />;
          } else if (activeLink === "回覆" && activeLink === info.name) {
            return <UserReplyTweets key={info.dataType} />;
          } else if (activeLink === "喜歡的內容" && activeLink === info.name) {
            return <UserLikeTweets key={info.dataType} />;
          }
          return null;
        })}
      </section>
    </section>
  );
};
