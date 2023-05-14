import './CloseButton.css';
import close from '../../../Assets/close.png';

const CloseButton = ({ handleClose }) => {
  return (
    <button
      className="close"
      type="button"
      onClick={handleClose}
      aria-label="Close modal"
    >
      <img src={close} alt="Close" />
    </button>
  );
};

export default CloseButton;
