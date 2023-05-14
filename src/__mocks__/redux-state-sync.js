import '@testing-library/jest-dom';

function mockFunction() {
  return jest.fn();
}

export const createStateSyncMiddleware = () => mockFunction;

export const initMessageListener = () => jest.fn();
