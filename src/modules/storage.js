import update from './update.js';

class Storage {
  getSeasonOne = async () => {
    const response = await fetch(
      'https://api.tvmaze.com/seasons/40764/episodes',
    );
    this.seasonOne = await response.json();
    update.season(this.seasonOne);
  };

  getSeasonTwo = async () => {
    const response = await fetch(
      'https://api.tvmaze.com/seasons/103731/episodes',
    );
    this.seasonTwo = await response.json();
    this.seasonTwo.splice(3, 1);
    update.season(this.seasonTwo);
  };

  getLikes = async () => {
    const response = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mSaRFqdkMnkop7U1e7L5/likes/',
    );
    this.likes = await response.json();
    update.likes(this.likes);
  };
}

export default new Storage();
