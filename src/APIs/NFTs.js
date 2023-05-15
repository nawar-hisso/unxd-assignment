import axios from 'axios';
import CONTRACTS from '../Configs/Contracts';
import CONSTANTS from '../Configs/Constants';
import WALLET from '../Configs/Wallet';
import { setCollections } from '../Actions/App/App';
import COMMON from '../Configs/Common';

/**
 * Fetches the Glass Box NFTs owned by a given address.
 *
 * @param {string} address - The address to check for NFT ownership.
 * @return {Object|null} The number of Glass Box NFTs owned by the address.
 */
export const fetchGlassBox = async address => {
  let glassBoxCount = null;

  const Auth = Buffer.from(
    `${CONSTANTS.INFURA_API_KEY}:${CONSTANTS.INFURA_API_SECRET_KEY}`,
  ).toString('base64');

  try {
    const response = await axios.get(
      `https://nft.api.infura.io/networks/${WALLET.CHAIN.ID}/nfts/${CONTRACTS.GLASS_BOX_COLLECTION}/owners`,
      {
        headers: {
          Authorization: `Basic ${Auth}`,
          Accept: 'application/json',
        },
      },
    );

    const { owners } = response.data;

    const assets = owners.filter(owner => {
      return owner?.ownerOf === address;
    });

    if (assets?.length > 0) {
      glassBoxCount = {
        class: COMMON.COLLECTION_CLASSES.GLASS_BOX.NAME,
        count: assets?.length,
      };
    }

    return glassBoxCount;
  } catch (error) {
    return glassBoxCount;
  }
};

/**
 * Fetches the DG Family NFTs owned by a given address and classifies them.
 *
 * @param {string} address - The address to check for NFT ownership.
 * @return {Array} An array of objects, each containing the class of NFT and the count owned by the address.
 */
export const fetchDGFamily = async address => {
  const Auth = Buffer.from(
    `${CONSTANTS.INFURA_API_KEY}:${CONSTANTS.INFURA_API_SECRET_KEY}`,
  ).toString('base64');

  try {
    const response = await axios.get(
      `https://nft.api.infura.io/networks/${WALLET.CHAIN.ID}/nfts/${CONTRACTS.DG_FAMILY_COLLECTION}/owners`,
      {
        headers: {
          Authorization: `Basic ${Auth}`,
          Accept: 'application/json',
        },
      },
    );

    const { owners } = response.data;
    const assets = owners.filter(owner => {
      return owner?.ownerOf === address;
    });

    const classifiedAssets = assets.map(asset => {
      let classification;
      const tokenId = parseInt(asset.tokenId);

      if (
        tokenId >= COMMON.COLLECTION_CLASSES.PLATINUM_BOX.MIN &&
        tokenId <= COMMON.COLLECTION_CLASSES.PLATINUM_BOX.MAX
      ) {
        classification = COMMON.COLLECTION_CLASSES.PLATINUM_BOX.NAME;
      } else if (
        tokenId >= COMMON.COLLECTION_CLASSES.GOLD_BOX.MIN &&
        tokenId <= COMMON.COLLECTION_CLASSES.GOLD_BOX.MAX
      ) {
        classification = COMMON.COLLECTION_CLASSES.GOLD_BOX.NAME;
      } else {
        classification = COMMON.COLLECTION_CLASSES.BLACK_BOX.NAME;
      }

      return {
        ...asset,
        classification,
      };
    });

    const countMap = classifiedAssets.reduce((acc, asset) => {
      const count = { ...acc };
      if (asset.classification in count) {
        count[asset.classification] += 1;
      } else {
        count[asset.classification] = 1;
      }
      return count;
    }, {});

    const tokenClassesCount = Object.entries(countMap).reduce(
      (acc, [key, value]) => {
        acc.push({ class: key, count: value });
        return acc;
      },
      [],
    );

    return tokenClassesCount;
  } catch (error) {
    return [];
  }
};

/**
 * Fetches all the NFTs (Glass Box and DG Family) owned by a given address.
 *
 * @param {Function} dispatch - The dispatch function from Redux.
 * @param {string} address - The address to check for NFT ownership.
 * @return {Array} An array of objects, each containing the class of NFT and the count owned by the address.
 */
export const fetchNFTs = async (dispatch, address) => {
  try {
    const glassBox = await fetchGlassBox(address);
    const dgFamily = await fetchDGFamily(address);

    const allNFTs = [...dgFamily];

    if (glassBox) {
      allNFTs.push(glassBox);
    }

    setCollections(dispatch, allNFTs);

    return allNFTs;
  } catch (error) {
    return [];
  }
};
