import state from './state.js'
import * as timer from './timer.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')
  
  timer.countdown()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
}

export function addMinutes() {
  if (state.minutes >= 240) {
    alert('Máximo de 2 horas')
    return
  }

  state.minutes = state.minutes += 5
  timer.updateDisplay()
}

export function removeMinutes() {
  if (state.minutes <= 5) {
    alert('Não é possível diminuir mais')
    return
  }

  state.minutes = state.minutes -= 5
  timer.updateDisplay()
}