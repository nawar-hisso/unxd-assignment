import './HomePage.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import video from '../../../Assets/boxes_kaxrbj.gif';
import Prompt from '../../Molecules/Prompt/Prompt';
import CustomButton from '../../Atoms/CustomButton/CustomButton';
import {
  connectToMetaMask,
  onboardMetaMask,
} from '../../../Actions/MetaMask/MetaMask';
import WALLET from '../../../Configs/Wallet';

/**
 * HomePage component that represents the home page of the application.
 *
 * @returns {JSX.Element} The rendered HomePage component.
 */
const HomePage = () => {
  const dispatch = useDispatch();
  const [promptOpen, setPromptOpen] = useState(false);
  const [connectWalletIsDisabled, setConnectWalletIsDisabled] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState(
    WALLET.CONNECTION_STATUSES.CONNECTED,
  );

  /**
   * Toggles the prompt dialog open and closed.
   */
  const handlePrompt = () => {
    setPromptOpen(!promptOpen);
  };

  /**
   * Handles the onboarding process for MetaMask.
   */
  const handleOnboarding = () => {
    onboardMetaMask();
    handlePrompt();
  };

  /**
   * Connects the wallet to MetaMask.
   */
  const connectWallet = async () => {
    setConnectWalletIsDisabled(true);
    const connection = await connectToMetaMask(dispatch);
    setConnectionStatus(connection);
    setPromptOpen(!promptOpen);
    setConnectWalletIsDisabled(false);
  };

  /**
   * Renders the content of the prompt dialog based on the connection status.
   * @returns {JSX.Element|null} The rendered content of the prompt dialog.
   */
  const renderModalContent = () => {
    switch (connectionStatus) {
      case WALLET.CONNECTION_STATUSES.CONNECTED:
        return <p>Connected</p>;
      case WALLET.CONNECTION_STATUSES.NO_COLLECTIONS:
        return <p>You do not have enough NFTs in your wallet</p>;
      case WALLET.CONNECTION_STATUSES.ONBOARDING:
        return (
          <>
            <p>MetaMask is not installed on your browser</p>
            <CustomButton title="Install MetaMask" handler={handleOnboarding} />
          </>
        );
      case WALLET.CONNECTION_STATUSES.ON_MOBILE:
        return (
          <>
            <p>You will be redirected to Install/Open MetaMask app</p>
            <p>
              If the app is not installed, complete the steps and get back to us
            </p>
            <CustomButton title="Go to MetaMask" handler={handleOnboarding} />
          </>
        );
      case WALLET.CONNECTION_STATUSES.CANCELLED:
        return <p>Cancelled</p>;
      case WALLET.CONNECTION_STATUSES.ERROR:
        return <p>Error</p>;
      default:
        return null;
    }
  };

  /**
   * Adds or removes the class 'MetaMaskMobile' to the body element based on the user agent string.
   */
  useEffect(() => {
    const { body } = document;

    // Check if the user agent contains 'MetaMaskMobile'
    if (navigator.userAgent.indexOf('MetaMaskMobile') !== -1) {
      body.classList.add('MetaMaskMobile'); // Add the class 'MetaMaskMobile' to the body element
    } else {
      body.classList.remove('MetaMaskMobile'); // Remove the class 'MetaMaskMobile' from the body element
    }
  }, []);

  return (
    <div className="home" data-testid="home-page">
      <div className="home-inside">
        <div className="gif-center">
          <img
            src={video}
            alt="video"
            width="300px"
            height="300px"
            className="gif"
          />
        </div>

        <div className="home-content">
          <h1 className="main">DGFamily Event</h1>
          <p>Welcome DGFamily!</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            elementum, leo tempus faucibus sagittis, diam augue maximus elit,
            imperdiet ornare augue velit sed velit. Vestibulum elementum lacus
            ut ligula eleifend, eu volutpat enim vulputate. Suspendisse
            efficitur fringilla leo, sed varius nus luctus sed.
          </p>

          <div className="submit">
            <CustomButton
              title="Connect Wallet"
              handler={connectWallet}
              isDisabled={connectWalletIsDisabled}
              data-testid="connect-wallet-button"
            />
          </div>
        </div>
      </div>

      <Prompt
        title="Prompt"
        show={promptOpen}
        onClose={handlePrompt}
        data-testid="prompt"
      >
        {renderModalContent()}
      </Prompt>
    </div>
  );
};

export default HomePage;
