import './CustomButton.css';

const CustomButton = ({ title, handler, isDisabled }) => {
  return (
    <button
      type="button"
      className="custom-button"
      onClick={handler}
      disabled={isDisabled}
    >
      {title}
    </button>
  );
};

export default CustomButton;
