import './HomePage.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import video from '../../../Assets/boxes_kaxrbj.gif';
import Prompt from '../../Molecules/Prompt/Prompt';
import CustomButton from '../../Atoms/CustomButton/CustomButton';
import { connectToMetaMask, onboardMetaMask } from '../../../Actions/MetaMask';
import WALLET from '../../../Configs/Wallet';

const HomePage = () => {
  const dispatch = useDispatch();
  const [promptOpen, setPromptOpen] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState(
    WALLET.CONNECTION_STATUSES.CONNECTED,
  );

  const handlePrompt = () => {
    setPromptOpen(!promptOpen);
  };

  const handleOnboarding = () => {
    onboardMetaMask();
    handlePrompt();
  };

  const connectWallet = async () => {
    const connection = await connectToMetaMask(dispatch);
    setConnectionStatus(connection);
    setPromptOpen(!promptOpen);
  };

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
        return <p>Mobile onboarding</p>;
      case WALLET.CONNECTION_STATUSES.CANCELLED:
        return <p>Cancelled</p>;
      case WALLET.CONNECTION_STATUSES.ERROR:
        return <p>Error</p>;
      default:
        return null;
    }
  };

  useEffect(() => {
    // eslint-disable-next-line no-alert
    //alert(`Client: ${navigator.userAgent}`);
    // eslint-disable-next-line no-alert
    // alert(`Height: ${window.innerHeight} - Width: ${window.innerWidth}`);
    // Set a CSS variable with the actual height of the viewport
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // Update the value when the window is resized
    window.addEventListener('resize', () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    const { body } = document;

    if (navigator.userAgent.indexOf('MetaMaskMobile') !== -1) {
      body.classList.add('MetaMaskMobile');
    } else {
      body.classList.remove('MetaMaskMobile');
    }
  }, []);

  return (
    <div className="home">
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
            <CustomButton title="Connect Wallet" handler={connectWallet} />
          </div>
        </div>
      </div>

      <Prompt title="Prompt" show={promptOpen} onClose={handlePrompt}>
        {renderModalContent()}
      </Prompt>
    </div>
  );
};

export default HomePage;
