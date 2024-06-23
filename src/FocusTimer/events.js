import * as actions from './actions.js'
import * as element from './elements.js'

export function registerControls() {
  element.controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action

    if (typeof actions[action] !== "function") {
      return
    }

    actions[action]()
  })
}