import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const localStorageKey = 'videoplayer - current - time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.setCurrentTime(loadPosition());
player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(e) {
  savePosition(e.seconds);
}

function savePosition(value) {
  localStorage.setItem(localStorageKey, String(value));
}

function loadPosition() {
  return localStorage.getItem(localStorageKey) || 0;
}
