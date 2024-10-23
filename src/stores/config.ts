import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useConfig = defineStore('useConfig', () => {
  const config = ref()
  const setconfig = (val) => {
    config.value = val
    // console.log(screenWidth.value)
  }

  return { config, setconfig }
})
