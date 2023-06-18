import { useAuth } from "context/authContext";
import { AuthInput } from "components/AuthInput";
import { ReactComponent as LogoSVG } from "assets/Icon.svg";
import styles from "pages/LoginRegister.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import clsx from "clsx";
import { Verified } from "./mainpage/verify";

export const LoginPage = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const id = localStorage.getItem("id");
  const [accountPassed, setAccountPassed] = useState(true);
  const [pwdPassed, setPwdPassed] = useState(true);

  Verified();

  const handleLogin = async () => {
    if (account.length === 0) return;
    if (password.length === 0) return;

    const res = await login({ account, password });
    if (res.success) {
      setAccountPassed(true);
      Swal.fire({
        title: "登入成功!",
        icon: "success",
        iconColor: "#82C43C",
        showConfirmButton: false,
        timer: 1000,
        position: "top",
      });
      setInterval(() => {
        if (!id) {
          console.log(id);
          console.log("reload");
          window.location.reload();
        } else {
          console.log(id);
          navigate("/home");
          return;
        }
      }, 500);
    } else if (res.response.data === "Account incorrect") {
      console.log(res.response.data);
      setAccountPassed(false);
      Swal.fire({
        title: "登入失敗!",
        icon: "error",
        showConfirmButton: false,
        timer: 1000,
        position: "top",
      });
      return;
    } else if (res.response.data === "Password incorrect") {
      setPwdPassed(false);
      Swal.fire({
        title: "登入失敗!",
        icon: "error",
        showConfirmButton: false,
        timer: 1000,
        position: "top",
      });
      return;
    }
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
          value={account}
          accountPassed={accountPassed}
          label="帳號"
          placeholder="請輸入帳號"
          onChange={(e) => {
            setAccount(e.target.value);
            setAccountPassed(true);
          }}
          onKeyDown={handleLogin}
        />
        <span
          className={clsx("", {
            [styles.limit]: !accountPassed,
            [styles.noLimit]: accountPassed,
          })}
        >
          帳號不存在!
        </span>
      </div>
      <div className={styles.inputContainer}>
        <AuthInput
          type="password"
          label="密碼"
          value={password}
          placeholder="請輸入密碼"
          onChange={(e) => {
            setPassword(e.target.value);
            setPwdPassed(true);
          }}
          pwdPassed={pwdPassed}
          onKeyDown={handleLogin}
        />
        <span
          className={clsx("", {
            [styles.limit]: !pwdPassed,
            [styles.noLimit]: pwdPassed,
          })}
        >
          密碼不正確!
        </span>
      </div>
      <button className={styles.loginButton} onClick={handleLogin}>
        登入
      </button>
      <div className={styles.linkText}>
        <Link to="/register">註冊</Link> ・{" "}
        <Link to="/admin/login">後台登入</Link>
      </div>
    </div>
  );
};
