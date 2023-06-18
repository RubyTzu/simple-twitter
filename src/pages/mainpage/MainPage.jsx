import { Navbar } from "components/Navbar";
import { Rightbar } from "components/Rightbar";
import styles from "./MainPage.module.scss";
import { Unverified } from "./verify";

export const MainPage = ({ middleContent, page }) => {
  Unverified();
  return (
    <div className={styles.mainPageContainer}>
      <Navbar />
      {middleContent}
      {page !== "設定" ? <Rightbar /> : <SettingPageRightbar />}
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
