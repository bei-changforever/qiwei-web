<template>
  <div class="product-base-container" ref="productBaseContainer">
    <div class="main-okj-container-nofull" ref="nofull" @touchmove="handleTouchMove">
      <!-- <div class="nofull-boxapi" v-for="(comp, index) in domArr[0].domarr" :key="index">
        <component :is="comp" />
      </div> -->
      <div class="nofull-boxapi">
        <!-- <productBanner /> -->
        <div class="b-no-image"></div>
      </div>
      <div class="nofull-boxapi">
        <RouterView />
      </div>
      <footer id="footer">
        <CusFooter />
      </footer>
    </div>
  </div>
</template>
<script setup lang="ts">
import productBanner from '@/views/Product/product-banner.vue'
import emitter from '@/utils/mitt'
import { ref, onMounted, onBeforeUnmount, toRefs, watch } from 'vue'
import { useCounterStore } from '@/stores/screenWidth'
const { screenWidth } = toRefs(useCounterStore())
const productBaseContainer = ref(null)

function handleTouchMove(event) {
  // event.preventDefault()

  // console.log('手指滑动')
  // console.log(mobilecontainer.value.getBoundingClientRect().top)

  if (productBaseContainer.value.getBoundingClientRect().top > -110) {
    emitter.emit('changHeaderBack', {
      isDark: true,
      activeBackgroundColor: null,
      slideChangeBakColor: false
    })
  }
  if (productBaseContainer.value.getBoundingClientRect().top <= -120) {
    emitter.emit('changHeaderBack', {
      isDark: false,
      activeBackgroundColor: 'rgba(255,255,255,.75)',
      slideChangeBakColor: true
    })
  }
}

// 处理滚轮事件的方法
const handleWheel = (event) => {
  const deltaY = event.deltaY
  if (deltaY < 0) {
    // 向上滚动
    if (productBaseContainer.value.getBoundingClientRect().top > -100) {
      emitter.emit('changHeaderBack', {
        isDark: true,
        activeBackgroundColor: null,
        slideChangeBakColor: false
      })
    }
  } else if (deltaY > 0) {
    // 向下滚动
    if (productBaseContainer.value.getBoundingClientRect().top <= -100) {
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

const PAGEWIDTH = ref(window.innerWidth)
//watch监听屏幕宽度的变化，进行侧边栏的收缩和展开
watch(
  () => screenWidth.value,
  (newVal, oldVal) => {
    PAGEWIDTH.value = newVal
  }
)
</script>
<style lang="scss" scoped>
.product-base-container {
  width: 100vw;
  
  .main-okj-container-nofull {
    width: 100%;
  }

  .b-no-image {
    width: 100%;
    height: 70px;
    background-color: white;
  }

  #footer {
    height: 700px !important;
  }
}
</style>
