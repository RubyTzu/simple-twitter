import "components/AuthInput.scss";

export const AuthInput = ({ type, label, placeholder }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};
