import './Footer.css';
import { Link } from 'react-router-dom';
import whiteLogo from '../../../Assets/white_logo.svg';
import facebook from '../../../Assets/facebook.svg';
import twitter from '../../../Assets/twitter.svg';
import link from '../../../Assets/link.svg';
import ROUTES_NAMES from '../../../Configs/RoutesNames';

const Footer = () => {
  return (
    <div className="footer">
      <div className="in-footer">
        <div className="footer-left" data-testid="footer-left">
          <Link to={ROUTES_NAMES.HOME}>
            <img src={whiteLogo} alt="white_logo" />
          </Link>
          <p>
            UNXD (&apos;Uncrossed) is a marketplace for digitally <br />{' '}
            authentic art, fashion, and experiences.{' '}
          </p>
        </div>
        <div className="footer-center" data-testid="footer-center">
          <h1>
            <Link to={ROUTES_NAMES.HOME}>Navigate</Link>
          </h1>
          <div className="footer-center-content">
            <p>
              <Link to={ROUTES_NAMES.HOME}>Drops</Link>
            </p>
            <p>
              <Link to={ROUTES_NAMES.HOME}>Marketplace</Link>
            </p>
            <p>
              <Link to={ROUTES_NAMES.HOME}>Featured</Link>
            </p>
            <p>
              <Link to={ROUTES_NAMES.HOME}>About</Link>
            </p>
            <p>
              <Link to={ROUTES_NAMES.HOME}>Help Center</Link>
            </p>
          </div>
        </div>
        <div className="footer-right" data-testid="footer-right">
          <h1>
            <Link to={ROUTES_NAMES.HOME}>Newsletter</Link>
          </h1>
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
              <Link target="_blank" to="https://www.facebook.com/nawwar.hisso/">
                <img src={facebook} alt="facebook" />
              </Link>
              <Link target="_blank" to="https://twitter.com/HissoNawar">
                <img src={twitter} alt="twitter" />
              </Link>
              <Link target="_blank" to="https://github.com/nawar-hisso">
                <img src={link} alt="link" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-last" data-testid="footer-last">
        <p>
          <Link to={ROUTES_NAMES.HOME}>Privacy</Link>
        </p>
        <p>
          <Link to={ROUTES_NAMES.HOME}>Terms of Service</Link>
        </p>
        <p>
          <Link to={ROUTES_NAMES.HOME}>Report a Bug</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
