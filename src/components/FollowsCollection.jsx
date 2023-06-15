import styles from "./FollowsCollection.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Followers } from "./Followers";
import { Followings } from "./Followings";
import axios from "axios";
const baseUrl = "https://twitter-2023.herokuapp.com";

const types = [
  { dataType: "followers", name: "追隨者" },
  { dataType: "followings", name: "正在追隨" },
];

export const FollowCollection = ({ clicked }) => {
  let typeInfos = types;
  const [activeLink, setActiveLink] = useState(clicked || "追隨者");
  const handleClick = (e) => {
    setActiveLink(e.target.innerText);
  };
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("authToken");
  const [followers, setFollowers] = useState([]);
  const [followings, setFollowings] = useState([]);

  useEffect(() => {
    const showFollower = async () => {
      const { data } = await axios.get(`${baseUrl}/api/users/${id}/followers`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setFollowers(data);
    };
    const showFollowings = async () => {
      const { data } = await axios.get(
        `${baseUrl}/api/users/${id}/followings`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setFollowings(data);
    };
    showFollower();
    showFollowings();
  }, [id, token]);

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
        {typeInfos.map((info) => {
          if (info.name === "追隨者" && activeLink === info.name) {
            return <Followers key={info.dataType} followers={followers} />;
          } else if (activeLink === "正在追隨" && activeLink === info.name) {
            return <Followings key={info.dataType} followings={followings} />;
          }
          return null;
        })}
      </section>
    </section>
  );
};
