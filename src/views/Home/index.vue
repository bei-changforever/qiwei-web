<template>
  <div class="home-base-container">
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
      <div class="boxapi">
        <footer id="footer">
          <CusFooter />
        </footer>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick, shallowRef, reactive } from 'vue'
import Banner from '@/views/Home/banner.vue'
import HomeView from '@/views/Home/product.vue'
import BussinessInfo from '@/views/Home/business-info.vue'
import Advantage from '@/views/Home/advantage.vue'
import DevelopMent from '@/views/Home/development.vue'
import Quality from '@/views/Home/quality.vue'
import DevelopMent2 from '@/views/Home/development2.vue'
import Added from '@/views/Home/added.vue'
import emitter from '@/utils/mitt'
const domArr = shallowRef([
  {
    id: 'home',
    domarr: [Banner, HomeView, BussinessInfo, Advantage, DevelopMent, Quality, DevelopMent2, Added]
  }
])
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
// 滚动到指定页面
function scrollToPage(pageIndex) {
  // 通知页面播放动画
  emitter.emit('ANIMATION', pageIndex)

  showAnimation.value = false

  if (pageIndex == 5) {
    showAnimation.value = true
    if (screenWidth.value >= 960 && screenWidth.value <= 1220) {
      container.value.style.top = `-495%`
    } else {
      container.value.style.top = `-470%`
    }
  } else if (pageIndex == 6) {
    showAnimation.value = true
    if (screenWidth.value >= 960 && screenWidth.value <= 1220) {
      container.value.style.top = `-595%`
    } else {
      container.value.style.top = `-565%`
    }
  } else if (pageIndex == 7) {
    showAnimation.value = true
    if (screenWidth.value >= 960 && screenWidth.value <= 1220) {
      container.value.style.top = `-695%`
    } else {
      container.value.style.top = `-670%`
    }
  } else if (pageIndex == 8) {
    showAnimation.value = true
    if (screenWidth.value >= 960 && screenWidth.value <= 1220) {
      container.value.style.top = `-752%`
    } else {
      container.value.style.top = `-729%`
    }
  } else {
    showAnimation.value = true
    container.value.style.top = `-${pageIndex}00%`
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
const screenWidth = ref(window.innerWidth)
const handleResize = () => {
  screenWidth.value =
    window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
}

const handleScrolltoTop = () => {
  scrollToPage(0)
}

const showAnimation = ref(false)

onMounted(() => {
  // window.addEventListener('wheel', handleWheel)
  emitter.on('BACKPAGETOP', (res) => {
    handleScrolltoTop()
    pageIndex.value = 0
  })
  // 添加鼠标滚轮事件
  document.onmousewheel = mouseWheel
  document.addEventListener('DOMMouseScroll', mouseWheel, false)
  // 设置滚动记录
  history.scrollRestoration = 'manual'

  nextTick(() => {
    boxapis.value = document.querySelectorAll('.boxapi')
    container.value.style.height = `${boxapis.length}00%`
  })

  window.addEventListener('resize', handleResize)
})
onBeforeUnmount(() => {
  document.removeEventListener('DOMMouseScroll', mouseWheel)
  emitter.off('BACKPAGETOP')
  emitter.off('ANIMATION')
})

watch(
  () => pageIndex.value,
  (newValue, oldValue) => {
    if (newValue == 0) {
      emitter.emit('changHeaderBack', {
        isDark: true,
        activeBackgroundColor: 'rgba(0,0,0,.75)',
        slideChangeBakColor: false
      })
    } else {
      emitter.emit('changHeaderBack', {
        isDark: true,
        activeBackgroundColor: 'rgba(0,0,0,.75)',
        slideChangeBakColor: true
      })
    }
  }
)
//watch监听屏幕宽度的变化，进行侧边栏的收缩和展开
watch(screenWidth, (newVal, oldVal) => {})
</script>
<style scoped lang="scss">
.home-base-container {
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

  // .router_animate-enter-active {
  //   animation: fadeIn 1s;
  // }
  // .router_animate-leave-active {
  //   animation: fadeOut 1s;
  // }
}
</style>
