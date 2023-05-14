import './Prompt.css';
import CloseButton from '../../Atoms/CloseButton/CloseButton';

const Prompt = ({ title, show, onClose, children }) => {
  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

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
