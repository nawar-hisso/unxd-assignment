import axios from 'axios';
import CONTRACTS from '../Configs/Contracts';
import CONSTANTS from '../Configs/Constants';
import WALLET from '../Configs/Wallet';
import { setCollections } from '../Actions/App';
import COMMON from '../Configs/Common';

// eslint-disable-next-line no-unused-vars
export const fetchGlassBox = async address => {
  let glassBoxCount = null;

  const Auth = Buffer.from(
    `${CONSTANTS.INFURA_API_KEY}:${CONSTANTS.INFURA_API_SECRET_KEY}`,
  ).toString('base64');

  try {
    const response = await axios.get(
      `https://nft.api.infura.io/networks/${WALLET.CHAIN_ID}/nfts/${CONTRACTS.GLASS_BOX_COLLECTION}/owners`,
      {
        headers: {
          Authorization: `Basic ${Auth}`,
          Accept: 'application/json',
        },
      },
    );

    const { owners } = response.data;

    const assets = owners.filter(owner => {
      return owner?.ownerOf === '0x000000000000000000000000000000000000dead';
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

// eslint-disable-next-line no-unused-vars
export const fetchDGFamily = async address => {
  const Auth = Buffer.from(
    `${CONSTANTS.INFURA_API_KEY}:${CONSTANTS.INFURA_API_SECRET_KEY}`,
  ).toString('base64');

  try {
    const response = await axios.get(
      `https://nft.api.infura.io/networks/${WALLET.CHAIN_ID}/nfts/${CONTRACTS.DG_FAMILY_COLLECTION}/owners`,
      {
        headers: {
          Authorization: `Basic ${Auth}`,
          Accept: 'application/json',
        },
      },
    );

    const { owners } = response.data;
    const assets = owners.filter(owner => {
      return owner?.ownerOf === '0x0b274e48d06419fac0c9bb39c3348740bf44aa6b';
    });

    const classifiedAssets = assets.map(asset => {
      let classification;
      const tokenId = parseInt(asset.tokenId);

      if (
        tokenId >= COMMON.COLLECTION_CLASSES.PLATINUM.MIN &&
        tokenId <= COMMON.COLLECTION_CLASSES.PLATINUM.MAX
      ) {
        classification = COMMON.COLLECTION_CLASSES.PLATINUM.NAME;
      } else if (
        tokenId >= COMMON.COLLECTION_CLASSES.GOLD.MIN &&
        tokenId <= COMMON.COLLECTION_CLASSES.GOLD.MAX
      ) {
        classification = COMMON.COLLECTION_CLASSES.GOLD.NAME;
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
