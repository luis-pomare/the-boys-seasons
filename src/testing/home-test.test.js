/** * @jest-environment jsdom */
import cardsCalculate from '../modules/cardsCalculate.js';

describe('Home-page counter test', () => {
  test('Test for 3 chapters of season 1', () => {
    const data = [
      {
        id: 1,
        image: 'element.artworkUrl100',
        name: 'element.trackName',
        author: 'element.artistName',
      },
      {
        id: 2,
        image: 'element.artworkUrl100',
        name: 'element.trackName',
        author: 'element.artistName',
      },
      {
        id: 3,
        image: 'element.artworkUrl100',
        name: 'element.trackName',
        author: 'element.artistName',
      },
    ];
    expect(cardsCalculate(data)).toBe(3);
  });
});
