<template>
  <div class="product-base-container" ref="productBaseContainer">
    <div class="main-okj-container-nofull" ref="nofull">
      <div class="nofull-boxapi" v-for="(comp, index) in domArr[0].domarr" :key="index">
        <component :is="comp" />
      </div>
      <footer id="footer">
        <CusFooter />
      </footer>
    </div>
  </div>
</template>
<script setup lang="ts">
import productBanner from '@/views/Product/product-banner.vue'
import ProductContainer from '@/views/Product/product-container.vue'
import emitter from '@/utils/mitt'
import { ref, onMounted, onBeforeUnmount, watch, nextTick, shallowRef, reactive } from 'vue'
const productBaseContainer = ref(null)
const domArr = shallowRef([
  {
    id: 'product',
    domarr: [productBanner, ProductContainer]
  }
])

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
.product-base-container {
  width: 100vw;
  //   border: 1px solid red;
  .main-okj-container-nofull {
    width: 100%;
  }
}
</style>
