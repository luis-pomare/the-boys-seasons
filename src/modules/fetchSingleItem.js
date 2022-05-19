const fetchSingleItem = async (id) => {
  const dataID = id;
  let data;
  const response = await fetch('https://api.tvmaze.com/seasons/40764/episodes');
  const show = await response.json();
  show.forEach((item) => {
    if (item.id === dataID) {
      data = item;
    }
  });
  return data;
};

export default fetchSingleItem;