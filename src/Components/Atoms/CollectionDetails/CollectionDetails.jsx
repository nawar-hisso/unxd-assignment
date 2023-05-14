import './CollectionDetails.css';

const CollectionDetails = ({
  message,
  glassBox = 0,
  blackBox = 0,
  goldBox = 0,
  platinumBox = 0,
}) => {
  return (
    <p>
      {message} You have {glassBox} glass box, {blackBox} black box, {goldBox}{' '}
      gold box and {platinumBox} platinum boxes in your wallet.
    </p>
  );
};
export default CollectionDetails;
