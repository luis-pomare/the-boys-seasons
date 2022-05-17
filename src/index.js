import './style.css';
import storage from './modules/storage';
import Icon from './image/logo.jpg';

document.getElementById('logoimg').src = Icon; // Main logo displaying

storage.getSeasonOne();
storage.getSeasonTwo();
