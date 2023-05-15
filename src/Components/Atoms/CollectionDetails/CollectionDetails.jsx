import { useSelector } from 'react-redux';
import './CollectionDetails.css';
import { useEffect, useState } from 'react';
import COMMON from '../../../Configs/Common';

/**
 * CollectionDetails component that displays the count of different box types in the user's wallet.
 *
 * @param {Object} props - The component props.
 * @param {string} props.message - The message to be displayed before the box counts.
 * @returns {JSX.Element} The rendered CollectionDetails component.
 */
const CollectionDetails = ({ message }) => {
  const { app } = useSelector(state => state);

  const [glassBox, setGlassBox] = useState(0);
  const [blackBox, setBlackBox] = useState(0);
  const [goldBox, setGoldBox] = useState(0);
  const [platinumBox, setPlatinumBox] = useState(0);

  /**
   * Updates the state with the box counts based on the collections in the user's wallet.
   */
  useEffect(() => {
    app?.collections?.forEach(collection => {
      switch (collection?.class) {
        case COMMON.COLLECTION_CLASSES.GLASS_BOX.NAME:
          setGlassBox(collection?.count);
          break;
        case COMMON.COLLECTION_CLASSES.BLACK_BOX.NAME:
          setBlackBox(collection?.count);
          break;
        case COMMON.COLLECTION_CLASSES.GOLD_BOX.NAME:
          setGoldBox(collection?.count);
          break;
        case COMMON.COLLECTION_CLASSES.PLATINUM_BOX.NAME:
          setPlatinumBox(collection?.count);
          break;
        default:
          break;
      }
    });
  }, [app?.collections]);

  return (
    <p>
      {message} You have {glassBox} glass box, {blackBox} black box, {goldBox}{' '}
      gold box, and {platinumBox} platinum boxes in your wallet.
    </p>
  );
};

export default CollectionDetails;
