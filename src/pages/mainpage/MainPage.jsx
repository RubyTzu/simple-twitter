import { Navbar } from "components/Navbar"
import { Rightbar } from "components/Rightbar"
import styles from "./MainPage.module.scss"


export const MainPage = ({ middleContent, page }) => {
  return (
    <div className={styles.mainPageContainer}>
      <Navbar />
      {middleContent}
      {page !== "設定" ? (
        <Rightbar />
      ) : (
        <SettingPageRightbar />
      )}
    </div>
  );
};

export const SettingPageRightbar = () => {
  return (
    <div>
      <div className={styles.rightbarContainer}></div>
    </div>
  );
};