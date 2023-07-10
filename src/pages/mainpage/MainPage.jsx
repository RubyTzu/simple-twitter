import { Navbar } from "components/Navbar";
import { Rightbar } from "components/Rightbar";
import styles from "./MainPage.module.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const MainPage = ({ middleContent, page }) => {
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  //如果用isAuthenticated判斷, 重整會authContext裡的初始值是false, 就直接導回login頁然後又導回home
  useEffect(() => {
    if (!id) navigate("/login");
  }, [id, navigate]);

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
