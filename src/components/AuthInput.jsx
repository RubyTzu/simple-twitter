import styles from "components/AuthInput.module.scss";
export const AuthInput = ({ type, label, placeholder, value, onChange }) => {
  return (
    <div className={styles.input}>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
