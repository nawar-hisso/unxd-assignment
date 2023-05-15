import './Header.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import logo from '../../../Assets/logo.svg';
import search from '../../../Assets/search.svg';
import notification from '../../../Assets/notification.svg';
import profile from '../../../Assets/profile.svg';
import ROUTES_NAMES from '../../../Configs/RoutesNames';
import {
  setCollections,
  setFormSubmitted,
  setWallet,
} from '../../../Actions/App/App';
import HELPERS from '../../../Utils/Helpers';

/**
 * Header component that renders the navigation bar at the top of the page.
 *
 * @returns {JSX.Element} The rendered Header component.
 */
const Header = () => {
  const dispatch = useDispatch();
  const { app } = useSelector(state => state);
  const [showDropdown, setShowDropdown] = useState(false);

  /**
   * Toggles the visibility of the dropdown menu.
   */
  const toggleDropdown = () => {
    if (app?.wallet) {
      setShowDropdown(!showDropdown);
    }
  };

  /**
   * Handles the log out action by resetting the app state and closing the dropdown menu.
   */
  const handleLogOut = () => {
    setWallet(dispatch, '');
    setCollections(dispatch, []);
    setFormSubmitted(dispatch, false);
    toggleDropdown();
  };

  return (
    <div>
      <div className="navbar">
        <ul>
          <li className="logo-element">
            <Link style={{ color: 'black' }} to={ROUTES_NAMES.HOME}>
              <img src={logo} alt="logo" className="logo" />
            </Link>
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
              <Link to={ROUTES_NAMES.HOME}>
                <img src={search} alt="search" />
              </Link>
              <Link to={ROUTES_NAMES.HOME}>
                <img src={notification} alt="notification" />
              </Link>
              <div
                style={{
                  display: 'inline-block',
                  position: 'relative',
                  cursor: 'pointer',
                }}
                onClick={
                  HELPERS.openedFromMobile() ? toggleDropdown : undefined
                }
                onMouseEnter={
                  HELPERS.openedFromMobile()
                    ? undefined
                    : () => toggleDropdown()
                }
                onMouseLeave={
                  HELPERS.openedFromMobile()
                    ? undefined
                    : () => toggleDropdown()
                }
                onKeyPress={
                  HELPERS.openedFromMobile() ? toggleDropdown : undefined
                }
                tabIndex={0}
                role="button"
              >
                <img src={profile} alt="profile" />
                {showDropdown && (
                  <div className="dropdown">
                    <button type="button" onClick={handleLogOut}>
                      Disconnect
                    </button>
                  </div>
                )}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
