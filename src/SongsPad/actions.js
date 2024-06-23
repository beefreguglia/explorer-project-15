import state from './state.js'
import * as sounds from './sounds.js'

export function toggleForest() {
  if (state.actualSong === 'forest') {
    state.actualSong = null
    sounds.forestAudio.pause()
  } else {
    sounds.coffeeShopAudio.pause()
    sounds.firePlaceAudio.pause()
    sounds.rainAudio.pause()
    state.actualSong = 'forest'
    sounds.forestAudio.play()
  }
}

export function toggleRain() {
  if (state.actualSong === 'rain') {
    state.actualSong = null
    sounds.rainAudio.pause()
  } else {
    sounds.coffeeShopAudio.pause()
    sounds.firePlaceAudio.pause()
    sounds.forestAudio.pause()
    state.actualSong = 'rain'
    sounds.rainAudio.play()
  }
}

export function toggleCoffeeShop() {
  if (state.actualSong === 'coffee-shop') {
    state.actualSong = null
    sounds.coffeeShopAudio.pause()
  } else {
    sounds.firePlaceAudio.pause()
    sounds.rainAudio.pause()
    sounds.forestAudio.pause()
    state.actualSong = 'coffee-shop'
    sounds.coffeeShopAudio.play()
  }
}

export function toggleFirePlace() {
  if (state.actualSong === 'fire-place') {
    state.actualSong = null
    sounds.firePlaceAudio.pause()
  } else {
    sounds.coffeeShopAudio.pause()
    sounds.rainAudio.pause()
    sounds.forestAudio.pause()
    state.actualSong = 'fire-place'
    sounds.firePlaceAudio.play()
  }
}