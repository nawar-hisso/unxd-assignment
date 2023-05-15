import './Prompt.css';
import CloseButton from '../../Atoms/CloseButton/CloseButton';

/**
 * Prompt component that displays a modal dialog with a title and content.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the prompt.
 * @param {boolean} props.show - Determines whether the prompt is visible or hidden.
 * @param {function} props.onClose - The callback function to be called when the prompt is closed.
 * @param {React.ReactNode} props.children - The content to be displayed inside the prompt.
 * @returns {JSX.Element} The rendered Prompt component.
 */
const Prompt = ({ title, show, onClose, children }) => {
  /**
   * Handles the keydown event and closes the prompt when the Escape key is pressed.
   * @param {KeyboardEvent} event - The keydown event.
   */
  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div
      className={`modal ${show ? 'show' : ''}`}
      onClick={onClose}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex="0"
    >
      <div
        className="modal-content"
        onClick={e => e.stopPropagation()}
        role="presentation"
      >
        <h2>{title}</h2>
        {children}
        <CloseButton handleClose={onClose} />
      </div>
    </div>
  );
};

export default Prompt;
