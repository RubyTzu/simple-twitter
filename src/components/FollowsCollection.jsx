import styles from "./FollowsCollection.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Followers } from "./Followers";
import { Followings } from "./Followings";

const types = [
  { dataType: "followers", name: "追隨者" },
  { dataType: "followings", name: "正在追隨" },
];

export const FollowCollection = () => {
  let typeInfos = types;
  const [activeLink, setActiveLink] = useState("追隨者");
  const handleClick = (e) => {
    setActiveLink(e.target.innerText);
  };

  return (
    <section className={styles.followListsContainer} data-type="1">
      <ul className={styles.followListsNavbar}>
        {typeInfos.map((info) => {
          const linkClassName = `${styles.followListButton} ${
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
      <section className={styles.followListContainer}>
        {typeInfos.map((info)=> {
            if (info.name === "追隨者" && activeLink === info.name) {
              return <Followers key={info.dataType} />;
            } else if (activeLink === "正在追隨" && activeLink === info.name) {
              return <Followings key={info.dataType} />;
            } 
            return null;
        })}
      </section>
    </section>
  );
};
