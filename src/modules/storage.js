import update from './update.js';
class Storage {
  getSeasonOne = async () => {
    const response = await fetch(
      'https://api.tvmaze.com/seasons/40764/episodes'
    );
    this.seasonOne = await response.json();
    update.season(this.seasonOne);
  };

  getSeasonTwo = async () => {
    const response = await fetch(
      'https://api.tvmaze.com/seasons/103731/episodes'
    );
    this.seasonTwo = await response.json();
  };
}

export default new Storage();
