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
  const response = await fetch(`${url}comments?item_id=${id}`);
  const data = await response.json();
  return data;
};