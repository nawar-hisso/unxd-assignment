import './CloseButton.css';
import close from '../../../Assets/close.png';

/**
 * CloseButton component that renders a button with a close icon.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.handleClose - The function to be called when the button is clicked.
 * @returns {JSX.Element} The rendered CloseButton component.
 */
const CloseButton = ({ handleClose }) => {
  /**
   * Handles the button click event.
   */
  const handleClick = () => {
    handleClose();
  };

  return (
    <button
      className="close"
      type="button"
      onClick={handleClick}
      aria-label="Close modal"
    >
      <img src={close} alt="Close" />
    </button>
  );
};

export default CloseButton;
