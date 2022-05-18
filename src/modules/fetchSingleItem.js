const fetchSingleItem = async (id) => {
  const dataID = id;
  let data;
  const response = await fetch('https://api.tvmaze.com/seasons/40764/episodes');
  const show = await response.json();
  console.log('hello single!');
  console.log(dataID)
  show.forEach((item) => {
    console.log(item.id)
    if (item.id == dataID) {
      console.log('Data true');
      data = item;
    }
  });
  return data;
};

export default fetchSingleItem;