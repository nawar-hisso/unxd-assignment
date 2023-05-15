import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormInput from './FormInput';

describe('FormInput', () => {
  const handleChange = jest.fn();

  it('renders input field with correct label and placeholder', () => {
    const label = 'Email';
    const placeholder = `${label} (Optional)`;
    const value = 'test@example.com';

    render(
      <FormInput
        label={label}
        type="text"
        id="email"
        value={value}
        handleChange={handleChange}
      />,
    );

    const inputElement = screen.getByLabelText(label);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.placeholder).toBe(placeholder);
    expect(inputElement.value).toBe(value);
  });

  it('calls the handleChange function when input value changes', () => {
    const handleChange = jest.fn();
    render(
      <FormInput
        label="Email"
        type="text"
        id="email"
        value="test@example.com"
        handleChange={handleChange}
      />,
    );

    const inputElement = screen.getByLabelText('Email');
    const updatedValue = 'updated@example.com';

    fireEvent.change(inputElement, { target: { value: updatedValue } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('disables the input field when isDisabled is true', () => {
    const label = 'Email';
    const value = 'test@example.com';

    render(
      <FormInput
        label={label}
        type="text"
        id="email"
        value={value}
        handleChange={handleChange}
        isDisabled
      />,
    );

    const inputElement = screen.getByLabelText(label);
    expect(inputElement).toBeDisabled();
  });

  it('requires the input field when isRequired is true', () => {
    const label = 'Email';
    const value = 'test@example.com';

    render(
      <FormInput
        label={label}
        type="text"
        id="email"
        value={value}
        handleChange={handleChange}
        isRequired
      />,
    );

    const inputElement = screen.getByLabelText(label);
    expect(inputElement.required).toBeTruthy();
  });
});
