import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Prompt from './Prompt';

describe('Prompt', () => {
  it('renders the title and children', () => {
    const title = 'Test Prompt';
    const content = 'This is a test prompt';
    render(
      <Prompt title={title} show onClose={jest.fn()}>
        {content}
      </Prompt>,
    );

    const titleElement = screen.getByText(title);
    const contentElement = screen.getByText(content);

    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });

  it('calls the onClose function when the close button is clicked', () => {
    const onClose = jest.fn();
    render(
      <Prompt title="Test Prompt" show onClose={onClose}>
        Content
      </Prompt>,
    );

    const closeButton = screen.getByAltText('Close');
    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls the onClose function when the ESC key is pressed', () => {
    const onClose = jest.fn();
    render(<Prompt title="Test Prompt" show onClose={onClose} />);

    const modalElement = screen.getByAltText('Close');
    fireEvent.keyDown(modalElement, { key: 'Escape' });

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call the onClose function when a key other than ESC is pressed', () => {
    const onClose = jest.fn();
    render(
      <Prompt title="Test Prompt" show onClose={onClose}>
        Content
      </Prompt>,
    );

    fireEvent.keyDown(document, { key: 'Enter' });

    expect(onClose).not.toHaveBeenCalled();
  });

  it('does not render when show prop is false', () => {
    render(
      <Prompt title="Test Prompt" show={false} onClose={jest.fn()}>
        Content
      </Prompt>,
    );

    const promptElement = screen.queryByRole('presentation');

    expect(promptElement).toBeNull();
  });
});
