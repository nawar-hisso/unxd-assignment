const isMetaMaskInstalled = () =>
  Boolean(window.ethereum && window.ethereum.isMetaMask);

const HELPERS = { isMetaMaskInstalled };

export default HELPERS;
