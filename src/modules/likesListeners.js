import storage from './storage.js';

export default () => {
  const cards = document.getElementById('container').children;
  for (let i = 0; i < cards.length; i += 1) {
    cards[i].children[2].children[0].addEventListener('click', async () => {
      await fetch(
        'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mSaRFqdkMnkop7U1e7L5/likes/',
        {
          method: 'POST',
          body: JSON.stringify({
            item_id: cards[i].children[2].children[0].dataset.id,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      );
      storage.getLikes();
    });
  }
};
