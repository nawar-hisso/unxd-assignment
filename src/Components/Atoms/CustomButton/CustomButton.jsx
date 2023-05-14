import './CustomButton.css';

const CustomButton = ({ title, handler }) => {
  return (
    <button type="button" className="custom-button" onClick={handler}>
      {title}
    </button>
  );
};

export default CustomButton;
