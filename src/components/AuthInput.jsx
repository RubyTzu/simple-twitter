import "components/AuthInput.scss";

export const AuthInput = ({ type, label, placeholder, value, onChange }) => {
  return (
    <div className="input">
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
