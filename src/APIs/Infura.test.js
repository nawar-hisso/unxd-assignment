import axios from 'axios';
import { fetchGlassBox, fetchDGFamily } from './Infura';
import CONTRACTS from '../Configs/Contracts';
import COMMON from '../Configs/Common';

jest.mock('axios');
jest.mock('../Actions/App/App');

describe('fetchGlassBox', () => {
  it('fetches glass box NFT count', async () => {
    const address = '0x123';
    const expectedCount = 3;
    const response = {
      data: {
        owners: [
          { ownerOf: '0x123' },
          { ownerOf: '0x123' },
          { ownerOf: '0x123' },
        ],
      },
    };
    axios.get.mockResolvedValueOnce(response);

    const result = await fetchGlassBox(address);

    expect(axios.get).toHaveBeenCalledWith(
      expect.stringContaining(CONTRACTS.GLASS_BOX_COLLECTION),
      expect.any(Object),
    );
    expect(result).toEqual({
      class: COMMON.COLLECTION_CLASSES.GLASS_BOX.NAME,
      count: expectedCount,
    });
  });

  it('returns null when no glass box assets found', async () => {
    const address = '0x123';
    const response = {
      data: {
        owners: [{ ownerOf: '0x456' }, { ownerOf: '0x456' }],
      },
    };
    axios.get.mockResolvedValueOnce(response);

    const result = await fetchGlassBox(address);

    expect(result).toBeNull();
  });

  it('returns null on API error', async () => {
    const address = '0x123';
    axios.get.mockRejectedValueOnce(new Error('API Error'));

    const result = await fetchGlassBox(address);

    expect(result).toBeNull();
  });
});

describe('fetchDGFamily', () => {
  it('fetches DG Family NFTs', async () => {
    const address = '0x123';
    const response = {
      data: {
        owners: [
          { ownerOf: '0x123', tokenId: '1' },
          { ownerOf: '0x123', tokenId: '2' },
          { ownerOf: '0x123', tokenId: '3' },
          { ownerOf: '0x123', tokenId: '4' },
        ],
      },
    };
    axios.get.mockResolvedValueOnce(response);

    const result = await fetchDGFamily(address);

    expect(axios.get).toHaveBeenCalledWith(
      expect.stringContaining(CONTRACTS.DG_FAMILY_COLLECTION),
      expect.any(Object),
    );
    expect(result).toEqual([{ class: 'PLATINUM_BOX', count: 4 }]);
  });

  it('returns an empty array when no DG Family assets found', async () => {
    const address = '0x123';
    const response = {
      data: {
        owners: [
          { ownerOf: '0x456', tokenId: '5' },
          { ownerOf: '0x456', tokenId: '6' },
        ],
      },
    };
    axios.get.mockResolvedValueOnce(response);

    const result = await fetchDGFamily(address);

    expect(axios.get).toHaveBeenCalledWith(
      expect.stringContaining(CONTRACTS.DG_FAMILY_COLLECTION),
      expect.any(Object),
    );
    expect(result).toEqual([]);
  });

  it('returns an empty array on API error', async () => {
    const address = '0x123';
    axios.get.mockRejectedValueOnce(new Error('API Error'));

    const result = await fetchDGFamily(address);

    expect(result).toEqual([]);
  });
});
