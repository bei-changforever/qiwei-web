import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('screenWidth', () => {
  const screenWidth = ref(window.innerWidth)
  const setScreenWidth = (val) => {
    screenWidth.value = val
    // console.log(screenWidth.value)
  }

  return { screenWidth, setScreenWidth }
})
