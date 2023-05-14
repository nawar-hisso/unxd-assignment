// MetaMask.test.js
import { ethers } from 'ethers';
import { setWallet } from '../App/App';
import { fetchNFTs } from '../../APIs/Infura';
import {
  connectToMetaMask,
  changeWalletListener,
  changeChainListener,
  insureRightChain,
} from './MetaMask';
import WALLET from '../../Configs/Wallet';
import HELPERS from '../../Utils/Helpers';

jest.mock('@metamask/onboarding');
jest.mock('ethers');
jest.mock('../App/App');
jest.mock('../../APIs/Infura');
jest.mock('../../Utils/Helpers');

const mockDispatch = jest.fn();
let mockEthereum;

describe('MetaMask actions', () => {
  beforeEach(() => {
    mockEthereum = {
      request: jest.fn(),
      on: jest.fn(),
    };
    global.window.ethereum = mockEthereum;
    setWallet.mockClear();
    fetchNFTs.mockClear();
    HELPERS.isMetaMaskInstalled.mockReturnValue(true);
  });

  it('connects to MetaMask', async () => {
    mockEthereum.request.mockResolvedValueOnce(['0x123']);
    const provider = {
      getNetwork: jest.fn().mockResolvedValue({ chainId: WALLET.CHAIN.ID }),
    };
    ethers.providers.Web3Provider.mockReturnValue(provider);
    fetchNFTs.mockResolvedValueOnce(['Collection1', 'Collection2']);

    const status = await connectToMetaMask(mockDispatch);

    expect(status).toBe(WALLET.CONNECTION_STATUSES.CONNECTED);
    expect(setWallet).toHaveBeenCalledWith(mockDispatch, '0x123');
    expect(fetchNFTs).toHaveBeenCalledWith(mockDispatch, '0x123');
  });

  it('adds wallet change listener', () => {
    changeWalletListener(mockDispatch);
    expect(mockEthereum.on).toHaveBeenCalledWith(
      WALLET.CHANGE_WALLET_EVENT,
      expect.any(Function),
    );
  });

  it('adds chain change listener', () => {
    changeChainListener();
    expect(mockEthereum.on).toHaveBeenCalledWith(
      WALLET.CHANGE_CHAIN_EVENT,
      expect.any(Function),
    );
  });

  it('ensures the right chain is selected', async () => {
    const provider = {
      getNetwork: jest.fn().mockResolvedValue({ chainId: WALLET.CHAIN.ID }),
    };
    ethers.providers.Web3Provider.mockReturnValue(provider);

    await insureRightChain();

    expect(provider.getNetwork).toHaveBeenCalled();
  });
});
