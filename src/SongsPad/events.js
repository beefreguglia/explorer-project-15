import * as actions from './actions.js'
import * as elements from './elements.js'

export function registerSongs() {
  elements.songs.addEventListener('click', (event) => {
    const isActive = event.target.classList.contains('active');

    if(isActive) {
      event.target.classList.toggle('active')
    } else {
      elements.buttons.forEach((button) => {
        button.classList.remove('active')
      });
      event.target.classList.toggle('active')
    }

    const action = event.target.dataset.action

    if (typeof actions[action] !== "function") {
      return
    }

    actions[action]()
  })
}