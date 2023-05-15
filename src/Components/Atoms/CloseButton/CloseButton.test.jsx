import { render, fireEvent, screen } from '@testing-library/react';
import CloseButton from './CloseButton';

describe('CloseButton', () => {
  it('renders without errors', () => {
    const handleClose = jest.fn();
    render(<CloseButton handleClose={handleClose} />);
  });

  it('calls handleClose when clicked', () => {
    const handleClose = jest.fn();
    render(<CloseButton handleClose={handleClose} />);
    const closeButton = screen.getByLabelText('Close modal');

    fireEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
