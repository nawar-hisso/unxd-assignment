import MetaMaskOnboarding from '@metamask/onboarding';
import WALLET from '../Configs/Wallet';
import HELPERS from '../Utils/Helpers';
import { setWallet } from './App';

const onboarding = new MetaMaskOnboarding({
  forwarderOrigin: WALLET.REDIRECT_URI,
});

export const connectToMetaMask = async dispatch => {
  try {
    if (HELPERS.isMetaMaskInstalled()) {
      const [address] = await window.ethereum.request({
        method: WALLET.CONNECT_REQUEST_METHOD,
      });

      setWallet(dispatch, address);
    } else {
      metaMaskOnboarding();
    }
  } catch (error) {
    if (error.code === WALLET.CANCEL_CODE) {
      // console.log('Cancelled');
    } else {
      // console.log(error);
    }
  }
};

export const metaMaskOnboarding = () => {
  onboarding.startOnboarding();
};

export const changeWalletListener = dispatch => {
  if (HELPERS.isMetaMaskInstalled()) {
    const handleChangeAccount = accounts => {
      if (accounts === []) {
        setWallet(dispatch, '');
      } else {
        setWallet(dispatch, accounts[0]);
      }
    };

    window.ethereum.on(WALLET.CHANGE_WALLET_EVENT, handleChangeAccount);
  }
};
