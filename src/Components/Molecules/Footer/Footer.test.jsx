import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the footer with correct content', () => {
    render(<Footer />);

    // Check the content in the left section
    const leftSection = screen.getByTestId('footer-left');
    expect(leftSection).toBeInTheDocument();
    expect(screen.getByAltText('white_logo')).toBeInTheDocument();
    expect(leftSection).toHaveTextContent(
      "UNXD ('Uncrossed) is a marketplace for digitally authentic art, fashion, and experiences.",
    );

    // Check the content in the center section
    const centerSection = screen.getByTestId('footer-center');
    expect(centerSection).toBeInTheDocument();
    expect(centerSection).toHaveTextContent('Navigate');
    expect(screen.getByText('Drops')).toBeInTheDocument();
    expect(screen.getByText('Marketplace')).toBeInTheDocument();
    expect(screen.getByText('Featured')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Help Center')).toBeInTheDocument();

    // Check the content in the right section
    const rightSection = screen.getByTestId('footer-right');
    expect(rightSection).toBeInTheDocument();
    expect(rightSection).toHaveTextContent('Newsletter');
    expect(screen.getByText(/Join our mailing list/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByText('Subscribe')).toBeInTheDocument();
    expect(screen.getByAltText('facebook')).toBeInTheDocument();
    expect(screen.getByAltText('twitter')).toBeInTheDocument();
    expect(screen.getByAltText('link')).toBeInTheDocument();

    // Check the content in the last section
    const lastSection = screen.getByTestId('footer-last');
    expect(lastSection).toBeInTheDocument();
    expect(screen.getByText('Privacy')).toBeInTheDocument();
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
    expect(screen.getByText('Report a Bug')).toBeInTheDocument();
  });
});
