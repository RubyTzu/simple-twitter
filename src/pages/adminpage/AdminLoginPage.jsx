import { AuthInput } from "components/AuthInput";
import { ReactComponent as LogoSVG } from "assets/Icon.svg";
import { Link, useNavigate } from "react-router-dom";
import styles from "pages/LoginRegister.module.scss";
import { useEffect, useState } from "react";
import { useAuth } from "context/authContext";
import clsx from "clsx";
import Swal from "sweetalert2";
// import { adminLogin } from "api/admin";
// import { adminLogin } from "context/authContext";

export const AdminLoginPage = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const { admIsAuthenticated, adminLogin } = useAuth();
  const [accountPassed, setAccountPassed] = useState(true);
  const [pwdPassed, setPwdPassed] = useState(true);
  const navigate = useNavigate();
  const id = localStorage.getItem("id");

  useEffect(() => {
    if (admIsAuthenticated) {
      navigate("/admin/tweetslist");
    } else return;
  }, [navigate, admIsAuthenticated]);

  const handleAdminLogin = async () => {
    if (account.length === 0) return;
    if (password.length === 0) return;

    const res = await adminLogin({ account, password });
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
          navigate("/admin/tweetslist");
          return;
        }
      }, 1000);
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
      <h1>後台登入</h1>
      <div className={styles.inputContainer}>
        <AuthInput
          type="text"
          value={account}
          accountPassed={accountPassed}
          onChange={(e) => {
            setAccount(e.target.value);
            setAccountPassed(true);
          }}
          label="帳號"
          placeholder="請輸入帳號"
          onKeyDown={handleAdminLogin}
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
          value={password}
          pwdPassed={pwdPassed}
          onChange={(e) => {
            setPassword(e.target.value);
            setPwdPassed(true);
          }}
          label="密碼"
          placeholder="請輸入密碼"
          onKeyDown={handleAdminLogin}
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

      <button className={styles.loginButton} onClick={handleAdminLogin}>
        登入
      </button>
      <div className={styles.linkText}>
        <Link to="/login">前台登入</Link>
      </div>
    </div>
  );
};
