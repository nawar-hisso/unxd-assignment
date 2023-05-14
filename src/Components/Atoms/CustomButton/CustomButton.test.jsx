import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomButton from './CustomButton';

describe('CustomButton', () => {
  it('renders button with correct title', () => {
    const title = 'Click me';
    render(<CustomButton title={title} />);

    const buttonElement = screen.getByText(title);
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls the handler function when clicked', () => {
    const mockHandler = jest.fn();
    render(<CustomButton title="Click me" handler={mockHandler} />);

    const buttonElement = screen.getByText('Click me');
    fireEvent.click(buttonElement);

    expect(mockHandler).toHaveBeenCalledTimes(1);
  });

  it('disables the button when isDisabled is true', () => {
    render(<CustomButton title="Click me" isDisabled />);

    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeDisabled();
  });

  it('does not disable the button when isDisabled is false', () => {
    render(<CustomButton title="Click me" isDisabled={false} />);

    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).not.toBeDisabled();
  });
});
