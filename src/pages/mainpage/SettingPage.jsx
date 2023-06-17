import { useEffect, useState } from "react";
import styles from "./SettingPage.module.scss";
import { AuthInput } from "components/AuthInput";
import { getProfile, updateProfile } from "api/userinfo";
import { useAuth } from "context/authContext";
import { useNavigate } from "react-router";
import { useCurrentUser } from "context/userInfoContext";
import clsx from "clsx";

export const SettingPage = () => {
  const [accountPassed, setAccountPassed] = useState(true);
  const [emailPassed, setEmailPassed] = useState(true);
  const [user, setUser] = useState({});
  const [nameLength, setNameLength] = useState("");
  const { isAuthenticated } = useAuth();
  const { profile, setProfile } = useCurrentUser();
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    } else return;
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const showPage = async () => {
      setProfile(await getProfile(id));
      // setNameLength(profile.name.length);
    };
    showPage();
    console.log("3600 test from setting page");
  }, [id, setProfile]);

  const handleSave = async () => {
    if (user.account === "") {
      alert("帳號不得為空");
      return;
    }
    if (user.name === "") {
      alert("名稱不得為空");
      return;
    }
    if (user.email === "") {
      alert("Email不得為空");
      return;
    }
    if (user.password !== user.checkPassword) {
      alert("請確認兩次密碼輸入一致");
      return;
    }
    if (nameLength > 50) {
      alert("名稱超過50字元");
      return;
    }
    const { success, data } = await updateProfile(user);
    console.log(success);

    if (success) {
      alert("已成功更新");
      console.log(data);
      const reload = () => window.location.reload(true);
      reload();
    } else {
      if (data.response.data === "This account has been used!") {
        alert("帳號已被使用");
        setAccountPassed(false);
        return;
      } else if (data.response.data === "This email has been used!") {
        alert("Email已被使用");
        setEmailPassed(false);
        return;
      } else return;
    }
  };
  return (
    <>
      <div className={styles.mainbarContainer}>
        <header className={styles.settingPageHeader}>
          <h1 className={styles.settingPageTitle}>帳戶設定</h1>
        </header>

        <div className={styles.inputContainer}>
          <AuthInput
            type="text"
            label="帳號"
            value={profile.account}
            onChange={(e) => {
              setAccountPassed(true);
              setUser({
                ...user,
                account: e.target.value,
              });
            }}
          />
          <span
            className={clsx("", {
              [styles.limit]: !accountPassed,
              [styles.noLimit]: accountPassed,
            })}
          >
            <p>帳號已被使用!</p>
          </span>
        </div>
        <div className={styles.inputContainer}>
          <AuthInput
            type="text"
            label="名稱"
            value={profile.name}
            onChange={(e) => {
              setNameLength(e.target.value.length);
              setUser({
                ...user,
                name: e.target.value,
              });
            }}
          />
          <span
            className={clsx("", {
              [styles.limit]: nameLength > 50,
              [styles.noLimit]: nameLength <= 50,
            })}
          >
            <p>字數超出上限!</p>
            <p>{nameLength}/50</p>
          </span>
        </div>
        <div className={styles.inputContainer}>
          <AuthInput
            type="text"
            label="Email"
            value={profile.email}
            onChange={(e) => {
              setEmailPassed(true);
              setUser({
                ...user,
                email: e.target.value,
              });
            }}
          />
          <span
            className={clsx("", {
              [styles.limit]: !emailPassed,
              [styles.noLimit]: emailPassed,
            })}
          >
            <p>Email已被使用!</p>
          </span>
        </div>
        <div className={styles.inputContainer}>
          <AuthInput
            type="password"
            label="密碼"
            value=""
            placeholder="請設定密碼"
            onChange={(e) => {
              setUser({
                ...user,
                password: e.target.value,
              });
            }}
          />
        </div>
        <div className={styles.inputContainer}>
          <AuthInput
            type="password"
            label="密碼再確認"
            value=""
            placeholder="請再次輸入密碼"
            onChange={(e) => {
              setUser({
                ...user,
                checkPassword: e.target.value,
              });
            }}
          />
        </div>
        <button className={styles.btn} onClick={handleSave}>
          儲存
        </button>
      </div>
    </>
  );
};
