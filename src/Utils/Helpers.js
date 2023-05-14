import COMMON from '../Configs/Common';

const isMetaMaskInstalled = () =>
  Boolean(window.ethereum && window.ethereum.isMetaMask);

const openedFromMobile = () => COMMON.MOBILE_REGEX.test(navigator.userAgent);

const checkValidEmail = email => COMMON.EMAIL_REGEX.test(email);

const HELPERS = { isMetaMaskInstalled, openedFromMobile, checkValidEmail };

export default HELPERS;
