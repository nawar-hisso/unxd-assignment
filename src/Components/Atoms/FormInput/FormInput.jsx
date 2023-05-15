import './FormInput.css';

/**
 * FormInput component that renders a form input field with a label.
 *
 * @param {Object} props - The component props.
 * @param {string} props.label - The label text for the input field.
 * @param {string} props.type - The type of the input field.
 * @param {string} props.id - The unique ID of the input field.
 * @param {string} props.value - The current value of the input field.
 * @param {Function} props.handleChange - The change handler function for the input field.
 * @param {boolean} [props.isDisabled=false] - Flag indicating if the input field should be disabled.
 * @param {boolean} [props.isRequired=false] - Flag indicating if the input field is required.
 * @returns {JSX.Element} The rendered FormInput component.
 */
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
