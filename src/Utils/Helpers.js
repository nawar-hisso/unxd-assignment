import COMMON from '../Configs/Common';

/**
 * Checks if MetaMask is installed in the user's browser.
 * @function
 * @returns {Boolean} - Returns true if MetaMask is installed, false otherwise.
 */
const isMetaMaskInstalled = () =>
  Boolean(window.ethereum && window.ethereum.isMetaMask);

/**
 * Checks if the application is opened from a mobile device.
 * @function
 * @returns {Boolean} - Returns true if opened from a mobile device, false otherwise.
 */
const openedFromMobile = () => COMMON.MOBILE_REGEX.test(navigator.userAgent);

/**
 * Checks if the provided email is valid.
 * @function
 * @param {string} email - The email address to check.
 * @returns {Boolean} - Returns true if the email is valid, false otherwise.
 */
const checkValidEmail = email => COMMON.EMAIL_REGEX.test(email);

/**
 * Helper functions to be exported as a module.
 * @namespace
 * @property {function} isMetaMaskInstalled - Function to check if MetaMask is installed.
 * @property {function} openedFromMobile - Function to check if the application is opened from a mobile device.
 * @property {function} checkValidEmail - Function to check if an email is valid.
 */
const HELPERS = { isMetaMaskInstalled, openedFromMobile, checkValidEmail };

export default HELPERS;
