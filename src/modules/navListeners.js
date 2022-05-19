import storage from './storage.js';
import update from './update.js';

export default () => {
  document.getElementById('seasonOne').addEventListener('click', () => {
    storage.getSeasonOne();
    update.getLikes();
  });

  document.getElementById('seasonTwo').addEventListener('click', () => {
    storage.getSeasonTwo();
    update.getLikes();
  });
};
