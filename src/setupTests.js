class MockBroadcastChannel {
  constructor() {
    this.listeners = [];
  }

  addEventListener(event, callback) {
    this.listeners.push({ event, callback });
  }

  postMessage(message) {
    this.listeners.forEach(({ event, callback }) => {
      if (event === 'message') {
        callback({ data: message });
      }
    });
  }
}

global.BroadcastChannel = MockBroadcastChannel;
global.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};
