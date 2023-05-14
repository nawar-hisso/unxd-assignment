import './Footer.css';
import whiteLogo from '../../../Assets/white_logo.svg';
import facebook from '../../../Assets/facebook.svg';
import twitter from '../../../Assets/twitter.svg';
import link from '../../../Assets/link.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="in-footer">
        <div className="footer-left" data-testid="footer-left">
          <img src={whiteLogo} alt="white_logo" />
          <p>
            UNXD (&apos;Uncrossed) is a marketplace for digitally <br />{' '}
            authentic art, fashion, and experiences.{' '}
          </p>
        </div>
        <div className="footer-center" data-testid="footer-center">
          <h1>Navigate</h1>
          <div className="footer-center-content">
            <p>Drops</p>
            <p>Marketplace</p>
            <p>Featured</p>
            <p>About</p>
            <p>Help Center</p>
          </div>
        </div>
        <div className="footer-right" data-testid="footer-right">
          <h1>Newsletter</h1>
          <p>
            Join our mailing list to stay in the loop with our newest feature
            releases,
            <br /> NFT drops, and tips and tricks for navigating UNXD.
          </p>
          <div className="msg">
            <input type="email" placeholder="Email" className="input" />
            <button className="subscribe" type="button">
              Subscribe
            </button>

            <div className="icons">
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
              <img src={link} alt="link" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-last" data-testid="footer-last">
        <p>Privacy</p>
        <p>Terms of Service</p>
        <p>Report a Bug</p>
      </div>
    </div>
  );
};

export default Footer;
