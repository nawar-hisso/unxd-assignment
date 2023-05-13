const APP_NAME = 'UNXD';
const COLLECTION_CLASSES = {
  PLATINUM: {
    NAME: 'PLATINUM',
    MIN: 0,
    MAX: 75,
  },
  GOLD: {
    NAME: 'GOLD',
    MIN: 76,
    MAX: 750,
  },
  BLACK_BOX: {
    NAME: 'BLACK_BOX',
    MIN: 751,
    MAX: Number.POSITIVE_INFINITY,
  },
};

const COMMON = { APP_NAME, COLLECTION_CLASSES };

export default COMMON;
