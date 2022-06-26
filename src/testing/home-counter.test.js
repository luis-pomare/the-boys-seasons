/**
 * @jest-environment jsdom
 */
import homeCounter from '../modules/home-counter.js';

const container = document.createElement('main');
container.id = 'container';
const counterOne = document.createElement('p');
counterOne.id = 'counterOne';
const counterTwo = document.createElement('p');
counterTwo.id = 'couterTwo';

test('use jsdom in this test file', () => {
  // Hard coded creation of three cards (episodes)
  container.innerHTML = `
<div></div>
<div></div>  
<div></div>
`;

  homeCounter(2);
  expect(container.children.length).toBe(3);
});
