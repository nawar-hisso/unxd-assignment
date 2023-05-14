const isMetaMaskInstalled = () =>
  Boolean(window.ethereum && window.ethereum.isMetaMask);

const openedFromMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );

const HELPERS = { isMetaMaskInstalled, openedFromMobile };

export default HELPERS;
