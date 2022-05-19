const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mSaRFqdkMnkop7U1e7L5/';
export const postComment = async (body) => {
  const response = await fetch(`${url}comments`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return (response.text());
};

export const getCommnets = async (id) => {
  let data;
  const dataArray = [{ creation_date: '2022-05-18', username: 'Barbra', comment: 'Wow ! i was on toes when Milk finally learned about the Supes.❤️😁' }];
  try {
    const response = await fetch(`${url}comments?item_id=${id}`);
    data = await response.json();
    data.forEach((item) => {
      dataArray.push(item);
    });
  } catch (error) {
    console.log(error);
  }
  return dataArray;
};