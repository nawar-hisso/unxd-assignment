import './CustomButton.css';

/**
 * CustomButton component that renders a custom button with a title and click handler.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the button.
 * @param {Function} props.handler - The click handler function.
 * @param {boolean} props.isDisabled - Flag indicating if the button should be disabled.
 * @returns {JSX.Element} The rendered CustomButton component.
 */
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
