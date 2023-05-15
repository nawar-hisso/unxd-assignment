import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import CollectionDetails from './CollectionDetails';
import COMMON from '../../../Configs/Common';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('CollectionDetails', () => {
  it('renders the collection details with correct counts', () => {
    const mockCollections = [
      { class: COMMON.COLLECTION_CLASSES.GLASS_BOX.NAME, count: 2 },
      { class: COMMON.COLLECTION_CLASSES.BLACK_BOX.NAME, count: 1 },
      { class: COMMON.COLLECTION_CLASSES.GOLD_BOX.NAME, count: 4 },
      { class: COMMON.COLLECTION_CLASSES.PLATINUM_BOX.NAME, count: 3 },
    ];

    useSelector.mockImplementation(selectorFn =>
      selectorFn({
        app: {
          collections: mockCollections,
        },
      }),
    );

    render(<CollectionDetails message="Hello" />);

    expect(screen.getByText(/Hello You have 2 glass box,/)).toBeTruthy();
    expect(screen.getByText(/ 1 black box,/)).toBeTruthy();
    expect(screen.getByText(/ 4 gold box/)).toBeTruthy();
    expect(screen.getByText(/ and 3 platinum boxes/)).toBeTruthy();
    expect(screen.getByText(/ in your wallet./)).toBeTruthy();
  });

  it('renders the collection details with zero counts when collections are empty', () => {
    useSelector.mockImplementation(selectorFn =>
      selectorFn({
        app: {
          collections: [],
        },
      }),
    );

    render(<CollectionDetails message="Hello" />);

    expect(screen.getByText(/Hello You have 0 glass box,/)).toBeTruthy();
    expect(screen.getByText(/ 0 black box,/)).toBeTruthy();
    expect(screen.getByText(/ 0 gold box/)).toBeTruthy();
    expect(screen.getByText(/ and 0 platinum boxes/)).toBeTruthy();
    expect(screen.getByText(/ in your wallet./)).toBeTruthy();
  });
});
