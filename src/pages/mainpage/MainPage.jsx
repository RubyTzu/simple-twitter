import { Navbar } from "components/Navbar"
import { Rightbar } from "components/Rightbar"
import styles from "./MainPage.module.scss"


export const MainPage = ({ middleContent, page }) => {
  return (
    <div className={styles.mainPageContainer}>
      <Navbar />
      {middleContent}
      {console.log(middleContent)}
      {page !== "設定頁" ? (
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