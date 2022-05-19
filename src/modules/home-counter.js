export default (season = 1) => {
  const counterOne = document.getElementById('counterOne');
  const counterTwo = document.getElementById('counterTwo');
  const cards = document.getElementById('container').children;
  if (season === 1) {
    counterOne.innerText = `(${cards.length})`;
    counterTwo.innerText = '';
  } else if (season === 2) {
    counterTwo.innerText = `(${cards.length})`;
    counterOne.innerText = '';
  }
};
