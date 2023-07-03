import { useEffect, useState } from "react";
import styles from "./SettingPage.module.scss";
import { AlertModal } from "components/modals/AlertModal";
import { AuthInput } from "components/AuthInput";
import { getProfile, updateProfile } from "api/userinfo";
import { useCurrentUser } from "context/userInfoContext";
import clsx from "clsx";
const id = localStorage.getItem("id");

export const SettingPage = () => {
  const [accountPassed, setAccountPassed] = useState(true);
  const [emailPassed, setEmailPassed] = useState(true);
  const [pwdPassed, setPwdPassed] = useState(true);
  const [namePassed, setNamePassed] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [alertWord, setAlertWord] = useState("");
  const [alertIcon, setAlertIcon] = useState(false);
  const [user, setUser] = useState({});
  const [nameLength, setNameLength] = useState("");
  const { profile, setProfile } = useCurrentUser();

  useEffect(() => {
    (async () => setProfile(await getProfile(id)))();
  }, [setProfile]);

  useEffect(() => {
    if (showAlert) {
      const timeout = setTimeout(() => {
        setShowAlert(false);
        setAlertWord("");
      }, 3000);
      return () => clearTimeout(timeout); // cleanup function
    }
  }, [showAlert]);

  const handleSave = async () => {
    if (user.account === "") {
      setShowAlert(true);
      setAlertWord("帳號不得為空");
      setAlertIcon(false);
      setAccountPassed(false);
      return;
    }
    if (user.name === "") {
      setShowAlert(true);
      setAlertWord("名稱不得為空");
      setAlertIcon(false);
      setNamePassed(false);
      return;
    }
    if (user.email === "") {
      setShowAlert(true);
      setAlertWord("Email不得為空");
      setAlertIcon(false);
      setEmailPassed(false);
      return;
    }
    if (user.password !== user.checkPassword) {
      setShowAlert(true);
      setAlertWord("請確認兩次密碼輸入一致");
      setAlertIcon(false);
      setPwdPassed(false);
      return;
    }
    if (nameLength > 50) {
      setShowAlert(true);
      setAlertWord("字數超過上限50字");
      setAlertIcon(false);
      setNamePassed(false);
      return;
    }
    const { success, data } = await updateProfile(user);
    if (success) {
      setShowAlert(true);
      setAlertWord("已成功更新");
      setAlertIcon(true);
      setTimeout(() => {
        const reload = () => window.location.reload(true);
        reload();
      }, 1000);
    } else {
      if (data.response.data === "This account has been used!") {
        setShowAlert(true);
        setAlertWord("帳號已被使用");
        setAlertIcon(false);
        setAccountPassed(false);
        return;
      } else if (data.response.data === "This email has been used!") {
        setShowAlert(true);
        setAlertWord("Email已被使用");
        setAlertIcon(false);
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
            accountPassed={accountPassed}
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
            <p>請再次輸入帳號!</p>
          </span>
        </div>
        <div className={styles.inputContainer}>
          <AuthInput
            type="text"
            label="名稱"
            value={profile.name}
            namePassed={namePassed}
            onChange={(e) => {
              setNamePassed(true);
              setNameLength(e.target.value.length);
              setUser({
                ...user,
                name: e.target.value,
              });
            }}
          />
          <span
            className={clsx("", {
              [styles.limit]: !namePassed,
              [styles.noLimit]: namePassed,
            })}
          >
            <p>請再次輸入名稱!</p>
            <p>{nameLength}/50</p>
          </span>
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
            emailPassed={emailPassed}
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
            <p>請再次輸入Email!</p>
          </span>
        </div>
        <div className={styles.inputContainer}>
          <AuthInput
            type="password"
            label="密碼"
            value=""
            pwdPassed={pwdPassed}
            placeholder="請設定密碼"
            onChange={(e) => {
              setPwdPassed(true);
              setUser({
                ...user,
                password: e.target.value,
              });
            }}
          />
          <span
            className={clsx("", {
              [styles.limit]: !pwdPassed,
              [styles.noLimit]: pwdPassed,
            })}
          >
            <p>密碼不一致!</p>
          </span>
        </div>
        <div className={styles.inputContainer}>
          <AuthInput
            type="password"
            label="密碼確認"
            value=""
            pwdPassed={pwdPassed}
            placeholder="請再次輸入密碼"
            onChange={(e) => {
              setPwdPassed(true);
              setUser({
                ...user,
                checkPassword: e.target.value,
              });
            }}
          />
          <span
            className={clsx("", {
              [styles.limit]: !pwdPassed,
              [styles.noLimit]: pwdPassed,
            })}
          >
            <p>密碼不一致!</p>
          </span>
        </div>
        <button className={styles.btn} onClick={handleSave}>
          儲存
        </button>
        {showAlert && <AlertModal value={alertWord} alertIcon={alertIcon} />}
      </div>
    </>
  );
};
