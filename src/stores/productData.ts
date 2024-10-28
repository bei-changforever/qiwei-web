import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductData = defineStore('useProductData', () => {
  const cateGory = ref()

  const contactProductInfo = ref()
  const setcateGory = (val) => {
    cateGory.value = val
  }

  const setContactProductInfo = (val) => {
    contactProductInfo.value = val
    console.log(val);
    
  }

  return { cateGory, contactProductInfo, setcateGory, setContactProductInfo }
})
