import './FormInput.css';

const FormInput = ({
  label,
  type,
  id,
  value,
  handleChange,
  isDisabled = false,
  isRequired = false,
}) => {
  const placeHolder = `${label} ${isRequired ? '(Required)' : '(Optional)'}`;

  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input
        onChange={handleChange}
        id={id}
        type={type}
        placeholder={placeHolder}
        value={value}
        disabled={isDisabled}
        required={isRequired}
      />
    </div>
  );
};
export default FormInput;
