import styles from "components/AuthInput.module.scss";
export const AuthInput = ({
  type,
  label,
  placeholder,
  value,
  onChange,
  onKeyDown,
}) => {
  return (
    <div className={styles.input}>
      <label>{label}</label>
      <input
        type={type}
        defaultValue={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onKeyDown?.();
          }
        }}
      />
    </div>
  );
};
