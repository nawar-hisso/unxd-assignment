import MetaMaskOnboarding from '@metamask/onboarding';
import WALLET from '../Configs/Wallet';
import HELPERS from '../Utils/Helpers';
import { setWallet } from './App';
import { fetchNFTs } from '../APIs/Infura';

const onboarding = new MetaMaskOnboarding({
  forwarderOrigin: WALLET.REDIRECT_URI,
});

export const connectToMetaMask = async dispatch => {
  let status = WALLET.CONNECTION_STATUSES.CONNECTED;

  try {
    if (HELPERS.isMetaMaskInstalled()) {
      const [address] = await window.ethereum.request({
        method: WALLET.CONNECT_REQUEST_METHOD,
      });

      setWallet(dispatch, address);

      if (address) {
        const collections = await fetchNFTs(dispatch, address);

        if (collections?.length === 0) {
          setWallet(dispatch, '');
          status = WALLET.CONNECTION_STATUSES.NO_COLLECTIONS;
        }
      }
    } else if (HELPERS.openedFromMobile()) {
      status = WALLET.CONNECTION_STATUSES.ON_MOBILE;
    } else {
      status = WALLET.CONNECTION_STATUSES.ONBOARDING;
    }

    return status;
  } catch (error) {
    if (error.code === WALLET.CANCEL_CODE) {
      status = WALLET.CONNECTION_STATUSES.CANCELLED;
    } else {
      status = WALLET.CONNECTION_STATUSES.ERROR;
    }

    return status;
  }
};

export const onboardMetaMask = () => {
  if (HELPERS.openedFromMobile()) {
    window.location.href = WALLET.METAMASK_MOBILE_BROWSER;
  } else {
    metaMaskOnboarding();
  }
};

const metaMaskOnboarding = () => {
  onboarding.startOnboarding();
};

export const changeWalletListener = dispatch => {
  if (HELPERS.isMetaMaskInstalled()) {
    const handleChangeAccount = async accounts => {
      if (accounts === []) {
        setWallet(dispatch, '');
      } else {
        setWallet(dispatch, accounts[0]);
        if (accounts[0]) {
          const collections = await fetchNFTs(dispatch, accounts[0]);

          if (collections?.length === 0) {
            setWallet(dispatch, '');
          }
        }
      }
    };

    window.ethereum.on(WALLET.CHANGE_WALLET_EVENT, handleChangeAccount);
  }
};
