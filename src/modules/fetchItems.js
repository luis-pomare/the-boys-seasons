// const nav = document.querySelectorAll('.list-item');

const fetchData = async (id = 1) => {
  console.log('clicked!');

  if (id === 1) {
    console.log('here is 1 ');
    const response = await fetch('https://api.tvmaze.com/seasons/40764/episodes');
    const items = await response.json();
    console.log(items);
    return items;
  } if (id === 2) {
    console.log('here is 2 ');
    const response = await fetch('https://api.tvmaze.com/seasons/103731/episodes');
    const items = await response.json();
    console.log(items);
    return items;
  }
  console.log('error');
  return 'invalid link';
};

// nav.forEach((navItem) => {
//   navItem.addEventListener('click', fetchData)
// console.log(e.target.parentNode.id)
// });

export default fetchData;