import CONSTANTS from './Constants';

const DG_FAMILY_COLLECTION =
  CONSTANTS.ENV === CONSTANTS.LOCAL_ENV
    ? '0xad2b43fb1bdac494d3cea174743e197a5dbea3a9'
    : '0xEb6C5acCafD8515c1b9E4c794bDC41532C5543EC';

const CONTRACTS = { DG_FAMILY_COLLECTION };

export default CONTRACTS;
