import clsx from "clsx";
import styles from "components/AuthInput.module.scss";
export const AuthInput = ({
  type,
  label,
  placeholder,
  value,
  onChange,
  onKeyDown,
  accountPassed,
  emailPassed,
  pwdPassed,
  namePassed,
}) => {
  let authInput;
  if (label === "帳號") {
    authInput = (
      <div className={styles.inputContainer}>
        <label>{label}</label>
        <input
          className={clsx("", {
            [styles.input]: accountPassed,
            [styles.inputNotPassed]: !accountPassed,
          })}
          type={type}
          defaultValue={value}
          label={label}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onKeyDown?.();
            }
          }}
        />
      </div>
    );
  } else if (label === "Email") {
    authInput = (
      <div className={styles.inputContainer}>
        <label>{label}</label>
        <input
          className={clsx("", {
            [styles.input]: emailPassed,
            [styles.inputNotPassed]: !emailPassed,
          })}
          type={type}
          defaultValue={value}
          label={label}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onKeyDown?.();
            }
          }}
        />
      </div>
    );
  } else if (label === "密碼" || label === "密碼確認") {
    authInput = (
      <div className={styles.inputContainer}>
        <label>{label}</label>
        <input
          className={clsx("", {
            [styles.input]: pwdPassed,
            [styles.inputNotPassed]: !pwdPassed,
          })}
          type={type}
          defaultValue={value}
          label={label}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onKeyDown?.();
            }
          }}
        />
      </div>
    );
  } else if (label === "名稱") {
    authInput = (
      <div className={styles.inputContainer}>
        <label>{label}</label>
        <input
          className={clsx("", {
            [styles.input]: namePassed,
            [styles.inputNotPassed]: !namePassed,
          })}
          type={type}
          defaultValue={value}
          label={label}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onKeyDown?.();
            }
          }}
        />
      </div>
    );
  } else {
    authInput = (
      <div className={styles.inputContainer}>
        <label>{label}</label>
        <input
          className={styles.input}
          type={type}
          defaultValue={value}
          label={label}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onKeyDown?.();
            }
          }}
        />
      </div>
    );
  }
  return <>{authInput}</>;
};
