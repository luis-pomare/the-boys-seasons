import storage from './storage.js';

export default () => {
  document.getElementById('seasonOne').addEventListener('click', () => {
    storage.getSeasonOne();
    storage.getLikes();
  });

  document.getElementById('seasonTwo').addEventListener('click', () => {
    storage.getSeasonTwo();
    storage.getLikes();
  });
};
