import { AuthInput } from "components/AuthInput";
import { ReactComponent as LogoSVG } from "assets/Icon.svg";
import styles from "pages/LoginRegister.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    if (email.length === 0) return;
    if (password.length === 0) return;
    const { data } = await axios.post(
      "https://twitter-2023.herokuapp.com/api/signin",
      {
        email: email,
        password: password,
      }
    );
    console.log(data.data.token);
    // const success = login({ username, password });
    // if (success) {
    //   console.log("success!!!");
    // } else {
    //   console.log("failed!!!");
    // }
  };

  return (
    <div className={styles.authContainer}>
      <div>
        <LogoSVG />
      </div>
      <h1>登入 Alphitter</h1>
      <div className={styles.inputContainer}>
        <AuthInput
          type="text"
          value={email}
          label="帳號"
          placeholder="請輸入帳號"
          onChange={setEmail}
        />
      </div>
      <div className={styles.inputContainer}>
        <AuthInput
          type="password"
          label="密碼"
          value={password}
          placeholder="請輸入密碼"
          onChange={setPassword}
        />
      </div>

      <button className={styles.loginButton} onClick={handleClick}>
        登入
      </button>
      <div className={styles.linkText}>
        <Link to="/register">註冊</Link> ・{" "}
        <Link to="/adminlogin">後台登入</Link>
      </div>
    </div>
  );
};
