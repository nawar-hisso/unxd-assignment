import MetaMaskOnboarding from '@metamask/onboarding';
import { ethers, utils } from 'ethers';
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
        const chainId = await getChainId();
        if (chainId !== WALLET.CHAIN.ID) {
          await switchChain();
        }

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

export const changeChainListener = () => {
  if (HELPERS.isMetaMaskInstalled()) {
    const handleChangeChain = async () => {
      await switchChain();
    };

    window.ethereum.on(WALLET.CHANGE_CHAIN_EVENT, handleChangeChain);
  }
};

const getChainId = async () => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
    const { chainId } = await provider.getNetwork();
    return chainId;
  } catch {
    return WALLET.CHAIN.ID;
  }
};

const switchChain = async () => {
  try {
    await window.ethereum.request({
      method: WALLET.SWITCH_CHAIN_REQUEST_METHOD,
      params: [
        {
          chainId: utils.hexValue(WALLET.CHAIN.ID),
        },
      ],
    });
  } catch (error) {
    if (error.code === WALLET.CHAIN_NOT_ADDED_CODE) {
      addEthereumNetwork();
    }
  }
};

const addEthereumNetwork = async () => {
  try {
    await window.ethereum.request({
      method: WALLET.ADD_CHAIN_REQUEST_METHOD,
      params: [
        {
          chainId: utils.hexValue(WALLET.CHAIN.ID),
          chainName: WALLET.CHAIN.NAME,
          nativeCurrency: {
            name: WALLET.CHAIN.CURRENCY.NAME,
            symbol: WALLET.CHAIN.CURRENCY.SYMBOL,
            decimals: WALLET.CHAIN.CURRENCY.DECIMALS,
          },
          rpcUrls: [WALLET.CHAIN.RPC_URL],
          blockExplorerUrls: [WALLET.CHAIN.BLOCK_EXPLORER_URL],
        },
      ],
    });
  } catch (error) {
    //
  }
};

export const insureRightChain = async () => {
  const chainId = await getChainId();
  if (chainId !== WALLET.CHAIN.ID) {
    await switchChain();
  }
};
