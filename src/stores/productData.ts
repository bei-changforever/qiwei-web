import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductData = defineStore('useProductData', () => {
  const cateGory = ref()
  const setcateGory = (val) => {
    cateGory.value = val
    // console.log(screenWidth.value)
  }

  return { cateGory, setcateGory }
})
