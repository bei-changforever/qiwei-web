<template>
  <div class="business-base-container" ref="businessBaseContainer">
    <div class="main-okj-container" ref="container">
      <div
        :class="[
          'boxapi',
          showAnimation && pageIndex == index ? 'animate__animated animate__fadeIn' : ''
        ]"
        v-for="(comp, index) in domArr[0].domarr"
        :key="index"
      >
        <component :is="comp" />
      </div>
      <div class="boxapi"></div>
      <div class="boxapi"></div>
      <div class="boxapi">
        <footer id="footer">
          <CusFooter />
        </footer>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, shallowRef, nextTick, watch, toRefs } from 'vue'
import BusinessBanner from './bussiness-banner.vue'
import BusinessRange from './business-range.vue'
import businessServe from './business-serve.vue'
import BusinessPrinciple from './business-principle.vue'
import businessChain from './business-chain.vue'
import businessCooperate from './business-cooperate.vue'
import emitter from '@/utils/mitt'
import { useCounterStore } from '@/stores/screenWidth'
const { screenWidth } = toRefs(useCounterStore())
const domArr = shallowRef([
  {
    id: 'business',
    domarr: [
      BusinessBanner,
      BusinessRange,
      businessServe,
      BusinessPrinciple,
      businessChain,
      businessCooperate
    ]
  }
])
const showAnimation = ref(false)
const container = ref(null)
// 定义当前页面的索引
let pageIndex = ref(0)
// 定义是否允许滚动
let pageScroll = ref(true)
// 定义上一次页面的索引
let prevIndex = ref(0)
let boxapis = ref([])

// 向上滚动
function scrollUp() {
  if (pageIndex.value > 0 && pageScroll.value) {
    prevIndex.value = pageIndex.value
    pageIndex.value--
    scrollToPage(pageIndex.value)
  } else if (pageIndex.value <= 0) {
    pageIndex.value = 0
  }
}

// 向下滚动
function scrollDown() {
  if (pageIndex.value < boxapis.value.length - 1 && pageScroll.value) {
    prevIndex.value = pageIndex.value
    pageIndex.value++
    scrollToPage(pageIndex.value)
  } else if (pageIndex.value >= boxapis.value.length - 1) {
    pageIndex.value = boxapis.value.length - 1
  }
}
let bigSizeIndex = ref(0)
// 滚动到指定页面
function scrollToPage(pageIndex) {
  console.log(pageIndex)

  if (pageIndex == 0) {
    container.value.style.top = `-0%`
  } else if (pageIndex == 1) {
    container.value.style.top = `-70%`
  } else if (pageIndex == 2) {
    container.value.style.top = `-162%`
  } else if (pageIndex == 3) {
    container.value.style.top = `-270%`
  } else if (pageIndex == 4) {
    container.value.style.top = `-360%`
  } else if (pageIndex == 5) {
    container.value.style.top = `-410%`
  } else if (pageIndex == 6) {
    container.value.style.top = `-450%`
  } else if (pageIndex == 7) {
    container.value.style.top = `-550%`
  } else if (pageIndex == 8) {
    if (PAGEWIDTH.value >= 1220 && PAGEWIDTH.value <= 1440) {
      container.value.style.top = `-570%`
    } else if (PAGEWIDTH.value >= 960 && PAGEWIDTH.value <= 1220) {
      container.value.style.top = `-560%`
    } else {
      container.value.style.top = `-570%`
    }
  }

  pageScroll.value = false
  scrollTimer()
}

// 设置定时器，等待500毫秒后，允许再次滚动
function scrollTimer() {
  setTimeout(() => {
    pageScroll.value = true
  }, 500)
}

// 鼠标滚轮事件
function mouseWheel(e) {
  if (container.value) {
    if (e.wheelDelta) {
      if (e.wheelDelta > 0) {
        scrollUp()
      } else {
        scrollDown()
      }
    } else {
      if (e.detail > 0) {
        scrollDown()
      } else {
        scrollUp()
      }
    }
  }
}

const handleScrolltoTop = () => {
  scrollToPage(0)
}
const pageType = ref('OEM')
onMounted(() => {
  // window.addEventListener('wheel', handleWheel)
  // emitter.on('BACKPAGETOP', (res) => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth' // 可选，使滚动平滑
  //   })
  // })
  emitter.on('tagViewsShowModel', (res) => {
    pageIndex.value = res + 1
    scrollToPage(res + 1)
  })

  emitter.on('TOGGLEPAGE', (res) => {
    // bigSizeIndex.value = 0
    scrollToPage(res + 1)
  })

  emitter.on('BACKPAGETOP', (res) => {
    handleScrolltoTop()
    bigSizeIndex.value = 0
    pageIndex.value = 0
  })

  // emitter.on('change-business-cooperate-index', (res) => {
  //   console.log(res)
  //   pageType.value = res
  // })

  // 添加鼠标滚轮事件
  document.onmousewheel = mouseWheel
  document.addEventListener('DOMMouseScroll', mouseWheel, false)
  // 设置滚动记录
  history.scrollRestoration = 'manual'

  nextTick(() => {
    boxapis.value = document.querySelectorAll('.boxapi')
    container.value.style.height = `${boxapis.length}00%`
  })
})

onBeforeUnmount(() => {
  emitter.off('tagViewsShowModel')
  document.removeEventListener('DOMMouseScroll', mouseWheel)
  emitter.off('BACKPAGETOP')
  emitter.off('TOGGLEPAGE')
})

watch(
  () => pageIndex.value,
  (newValue, oldValue) => {
    if (newValue == 0) {
      emitter.emit('changHeaderBack', {
        isDark: true,
        activeBackgroundColor: null,
        slideChangeBakColor: false
      })
    } else {
      emitter.emit('changHeaderBack', {
        isDark: false,
        activeBackgroundColor: 'rgba(255,255,255,.75)',
        slideChangeBakColor: true
      })
    }
  }
)

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
.business-base-container {
  /* 满屏 */
  width: 100vw;
  height: 100vh;
  /* 相对定位 */
  position: relative;
  /* 溢出隐藏 */
  overflow: hidden;

  .main-okj-container {
    width: 100%;
    height: 100%;
    /* 绝对定位 */
    position: absolute;
    left: 0;
    top: 0;
    /* 添加过渡动画 */
    transition: all 0.3s ease-in-out;

    .boxapi {
      overflow: hidden;
    }
  }
}
</style>
