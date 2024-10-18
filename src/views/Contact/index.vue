<template>
  <div class="contact-base-container" ref="contactBaseContainer">
    <div class="main-okj-container-nofull" ref="nofull">
      <!-- <div class="nofull-boxapi" v-for="(comp, index) in domArr[0].domarr" :key="index">
        <component :is="comp" />
      </div> -->
      <div class="nofull-boxapi">
        <contactbanner />
      </div>
      <div class="nofull-boxapi">
        <contactMain />
      </div>
      <footer id="footer">
        <CusFooter />
      </footer>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, shallowRef, nextTick, watch } from 'vue'
import contactbanner from './contact-banner.vue'
import contactMain from './contact-main.vue'
import emitter from '@/utils/mitt'
const contactBaseContainer = ref(null)
// 处理滚轮事件的方法
const handleWheel = (event) => {
  const deltaY = event.deltaY
  if (deltaY < 0) {
    // 向上滚动
    if (contactBaseContainer.value.getBoundingClientRect().top > -100) {
      emitter.emit('changHeaderBack', {
        isDark: true,
        activeBackgroundColor: null,
        slideChangeBakColor: false
      })
    }
  } else if (deltaY > 0) {
    // 向下滚动
    if (contactBaseContainer.value.getBoundingClientRect().top <= -100) {
      emitter.emit('changHeaderBack', {
        isDark: false,
        activeBackgroundColor: 'rgba(255,255,255,.75)',
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
.contact-base-container {
  width: 100vw;
  //   border: 1px solid red;
  .main-okj-container-nofull {
    width: 100%;
  }
}
</style>
