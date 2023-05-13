const isMetaMaskInstalled = () =>
  Boolean(window.ethereum && window.ethereum.isMetaMask);

const openedFromMobile = () => /Mobi|Android/i.test(navigator.userAgent);

const HELPERS = { isMetaMaskInstalled, openedFromMobile };

export default HELPERS;
