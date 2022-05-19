export default (season = 1) => {
  const counterOne = document.getElementById('counterOne');
  const counterTwo = document.getElementById('counterTwo');
  const cards = document.getElementById('container').children;
  counterOne.innerText = 'hi';
  counterTwo.innerText = 'hello';
  console.log('hello');
  if (season === 1) {
    counterOne.innerText = `(${cards.length})`;
    counterTwo.innerText = '';
  } else if (season === 2) {
    counterTwo.innerText = `(${cards.length})`;
    counterOne.innerText = '';
  }
};
