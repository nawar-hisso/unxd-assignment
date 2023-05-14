import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../Assets/logo.svg';
import search from '../../../Assets/search.svg';
import notification from '../../../Assets/notification.svg';
import profile from '../../../Assets/profile.svg';
import ROUTES_NAMES from '../../../Configs/RoutesNames';

const Header = () => {
  return (
    <div>
      <div className="navbar">
        <ul>
          <li className="logo-element">
            <img src={logo} alt="logo" className="logo" />
          </li>
          <li>
            <ul className="pages">
              <li>
                <Link style={{ color: 'black' }} to={ROUTES_NAMES.HOME}>
                  Drops
                </Link>
              </li>
              <li>
                <Link
                  style={{ color: 'black' }}
                  to={ROUTES_NAMES.REGISTRATION_FORM}
                >
                  Marketplace
                </Link>
              </li>
              <li>
                <Link style={{ color: 'black' }} to={ROUTES_NAMES.REQUEST_SENT}>
                  Featured
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <div className="right">
              <img src={search} alt="search" />
              <img src={notification} alt="notification" />
              <img src={profile} alt="profile" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
