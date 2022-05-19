/** * @jest-environment jsdom */
import commentCount from '../modules/commentCount.js';

describe('Counter comments test', () => {
  test('Return 1 if one item', () => {
    const data = [
      {
        creation_date: '2022-05-18',
        username: 'Barbra',
        comment:
          'Wow ! i was on toes when Milk finally learned about the Supes.❤️😁',
      },
    ];
    expect(commentCount(data)).toBe(1);
  });
});
