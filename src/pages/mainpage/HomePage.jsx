import { Navbar } from "components/Navbar";
import { Rightbar } from "components/Rightbar";
import styles from "./mainpage.module.scss"

export const HomePage = () => {
  return (
    <div className={styles.mainPageContainer}>
      <Navbar />
      <div className={styles.mainbarContainer}></div>
      <Rightbar />
    </div>
  );
};
