import './FormInput.css';

const FormInput = ({ label, type, id, isRequired = false }) => {
  const placeHolder = `${label} ${isRequired ? '(Required)' : '(Optional)'}`;

  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} placeholder={placeHolder} />
    </div>
  );
};
export default FormInput;
