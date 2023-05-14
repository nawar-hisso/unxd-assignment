import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import ROUTES_NAMES from '../../../Configs/RoutesNames';

describe('Header', () => {
  it('renders the header logo', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const logoElement = screen.getByAltText('logo');
    expect(logoElement).toBeInTheDocument();
  });

  it('renders the header links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const dropsLink = screen.getByText('Drops');
    const marketplaceLink = screen.getByText('Marketplace');
    const featuredLink = screen.getByText('Featured');

    expect(dropsLink).toBeInTheDocument();
    expect(marketplaceLink).toBeInTheDocument();
    expect(featuredLink).toBeInTheDocument();
  });

  it('renders the header icons', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const searchIcon = screen.getByAltText('search');
    const notificationIcon = screen.getByAltText('notification');
    const profileIcon = screen.getByAltText('profile');

    expect(searchIcon).toBeInTheDocument();
    expect(notificationIcon).toBeInTheDocument();
    expect(profileIcon).toBeInTheDocument();
  });

  it('navigates to the correct routes when links are clicked', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const dropsLink = screen.getByText('Drops');
    const marketplaceLink = screen.getByText('Marketplace');
    const featuredLink = screen.getByText('Featured');

    expect(dropsLink).toHaveAttribute('href', ROUTES_NAMES.HOME);
    expect(marketplaceLink).toHaveAttribute(
      'href',
      ROUTES_NAMES.REGISTRATION_FORM,
    );
    expect(featuredLink).toHaveAttribute('href', ROUTES_NAMES.REQUEST_SENT);
  });
});
