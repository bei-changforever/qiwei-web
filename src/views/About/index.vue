<template>
  <div class="about-base-container" ref="aboutBaseContainer">
    <div class="main-okj-container-nofull">
      <div class="boxapi">
        <AboutBanner />
      </div>

      <div class="boxapi" v-for="(comp, index) in domArr[0].domarr" :key="index">
        <component :is="comp" />
      </div>

      <footer id="footer">
        <CusFooter />
      </footer>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, shallowRef } from 'vue'
import AboutBanner from '@/views/About/about-banner.vue'
import AboutBussiness from '@/views/About/about-business.vue'
import AboutHistory from '@/views/About/about-history.vue'
import emitter from '@/utils/mitt'
const aboutBaseContainer = ref(null)

const domArr = shallowRef([
  {
    id: 'about',
    domarr: [AboutBussiness, AboutHistory]
  }
])

// 处理滚轮事件的方法
const handleWheel = (event) => {
  const deltaY = event.deltaY
  if (deltaY < 0) {
    // 向上滚动
    if (aboutBaseContainer.value.getBoundingClientRect().top > -100) {
      emitter.emit('changHeaderBack', {
        isDark: true,
        activeBackgroundColor: null,
        slideChangeBakColor: false
      })
    }
  } else if (deltaY > 0) {
    // 向下滚动
    if (aboutBaseContainer.value.getBoundingClientRect().top <= -100) {
      emitter.emit('changHeaderBack', {
        isDark: false,
        activeBackgroundColor: 'white',
        slideChangeBakColor: true
      })
    }
  }
}

onMounted(() => {
  window.addEventListener('wheel', handleWheel)
  emitter.on('BACKPAGETOP', (res) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 可选，使滚动平滑
    })
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('wheel', handleWheel)
  emitter.off('BACKPAGETOP')
})
</script>
<style lang="scss" scoped>
.about-base-container {
  width: 100vw;
  //   border: 1px solid red;
  .main-okj-container-nofull {
    width: 100%;
  }
}
</style>
