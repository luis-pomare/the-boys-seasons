const fetchSingleItem = async (id) => {
  let data;
  const response = await fetch('https://api.tvmaze.com/seasons/40764/episodes');
  const show = await response.json();
  console.log('hello single!');
  show.forEach((item) => {
    if (id === item.id) {
      data = item;
    }
  });
  return data;
};

export default fetchSingleItem;