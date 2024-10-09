<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'
import emitter from '@/utils/mitt'
const changeBackGroundColor = ref(false)
const activeColor = ref('#000000')
const isDarkPage = ref(true)

onMounted(() => {

  emitter.on('*', (index: any, data: any) => {
   
    if (index == 'changHeaderBack') {
      isDarkPage.value = data.isDark
      activeColor.value = data.activeBackgroundColor
      changeBackGroundColor.value = data.slideChangeBakColor
    } else if (index == 'DOMINDEX') {
      window.scrollTo({
        // top: document.documentElement.offsetHeight, //回到底部
        top: 0, //回到顶部
        left: 0,
        behavior: 'smooth' //smooth 平滑；auto:瞬间
      })
      if (data == 0) {
        isDarkPage.value = true
        changeBackGroundColor.value = false
        activeColor.value = '#000000'
      }
      if (data == 1) {
        isDarkPage.value = true
        activeColor.value = 'white'
        changeBackGroundColor.value = false
      }
    } else {
      return
    }
  })
})

onUnmounted(() => {
  emitter.off('*')
})
</script>

<template>
  <header id="header">
    <CusHeader
      :slideChangeBakColor="changeBackGroundColor"
      :isDark="isDarkPage"
      :activeBackgroundColor="activeColor"
    />
  </header>

  <RouterView />
</template>
