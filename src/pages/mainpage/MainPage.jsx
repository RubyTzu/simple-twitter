import { Navbar } from "components/Navbar";
import { Rightbar } from "components/Rightbar";
import styles from "./MainPage.module.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "context/authContext";

export const MainPage = ({ middleContent, page }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  //如果用id來判斷, 就不會回首頁?
  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
  }, [isAuthenticated, navigate]);

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
