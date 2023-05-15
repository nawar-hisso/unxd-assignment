import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Store from '../../../Store';
import Form from './Form';

describe('Form', () => {
  it('renders the form inputs', () => {
    render(
      <Store>
        <Form handleForm={jest.fn()} />
      </Store>,
    );

    const emailInput = screen.getByLabelText('EMAIL');
    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const walletAddressInput = screen.getByLabelText('Wallet Address');

    expect(emailInput).toBeInTheDocument();
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(walletAddressInput).toBeInTheDocument();
  });

  it('updates input values when changed', () => {
    render(
      <Store>
        <Form handleForm={jest.fn()} />
      </Store>,
    );

    const emailInput = screen.getByLabelText('EMAIL');
    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const walletAddressInput = screen.getByLabelText('Wallet Address');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(walletAddressInput, { target: { value: '0x1234567890' } });

    expect(emailInput.value).toBe('test@example.com');
    expect(firstNameInput.value).toBe('John');
    expect(lastNameInput.value).toBe('Doe');
    expect(walletAddressInput.value).toBe('0x1234567890');
  });

  it('disables the wallet address input', () => {
    render(
      <Store>
        <Form handleForm={jest.fn()} />
      </Store>,
    );

    const walletAddressInput = screen.getByLabelText('Wallet Address');

    expect(walletAddressInput).toBeDisabled();
  });
});
