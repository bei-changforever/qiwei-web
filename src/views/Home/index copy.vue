<template>
  <div class="home-base-container">
    <div class="main-okj-container" ref="container">
      <div class="boxapi" v-for="(comp, index) in domArr[0].domarr" :key="index">
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

// import { isMobile } from '@/utils/equipment'

const domArr = shallowRef([
  {
    id: 'home',
    domarr: [Banner, HomeView, BussinessInfo, Advantage, DevelopMent, Quality, DevelopMent2, Added]
  }
])

// const eq = ref(isMobile())

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
  // if (pageIndex == 8) {
  //   if (screenWidth.value >= 1520 && screenWidth.value <= 1920) {
  //     container.value.style.top = `-${pageIndex - 1}56%`
  //   }

  //   if (screenWidth.value <= 1520 && screenWidth.value >= 1440) {
  //     container.value.style.top = `-${pageIndex - 1}56%`
  //   }

  //   if (screenWidth.value <= 1440 && screenWidth.value >= 1220) {
  //     container.value.style.top = `-${pageIndex - 1}56%`
  //   }

  //   if (screenWidth.value <= 1220 && screenWidth.value >= 960) {
  //     container.value.style.top = `-${pageIndex - 1}72%`
  //   }

  //   if (screenWidth.value <= 960) {
  //     container.value.style.top = `-${pageIndex - 1}56%`
  //   }
  // } else {
  //   container.value.style.top = `-${pageIndex}00%`
  // }
  container.value.style.top = `-${pageIndex}00%`
  pageScroll.value = false
  scrollTimer()
}
// 设置定时器，等待500毫秒后，允许再次滚动
function scrollTimer() {
  setTimeout(() => {
    pageScroll.value = true
  }, 500)
}

const bigSizeIndex = ref(0)
// 鼠标滚轮事件
function mouseWheel(e) {
  if (container.value) {
    if (e.wheelDelta) {
      if (e.wheelDelta > 0) {
        scrollUp()
        console.log('aaaa')
        bigSizeIndex.value = 0
      } else {
        console.log(pageIndex.value)
        if (pageIndex.value == 3) {
          bigSizeIndex.value++
          if (bigSizeIndex.value >= 1 && bigSizeIndex.value < 3) {
            container.value.style.top = `-370%`
          }
          if (bigSizeIndex.value >= 3) {
            bigSizeIndex.value = 0
            pageIndex.value = 4
          }
        } else if (pageIndex.value == 4) {
          bigSizeIndex.value++
          if (bigSizeIndex.value >= 1 && bigSizeIndex.value < 3) {
            container.value.style.top = `-470%`
          }
          if (bigSizeIndex.value >= 3) {
            bigSizeIndex.value = 0
            pageIndex.value = 5
          }
        } else if (pageIndex.value == 5) {
          bigSizeIndex.value++
          if (bigSizeIndex.value >= 1 && bigSizeIndex.value < 3) {
            container.value.style.top = `-570%`
          }
          if (bigSizeIndex.value >= 3) {
            bigSizeIndex.value = 0
            pageIndex.value = 6
          }
        }
        else if (pageIndex.value == 6) {
          bigSizeIndex.value++
          if (bigSizeIndex.value >= 1 && bigSizeIndex.value < 3) {
            container.value.style.top = `-670%`
          }
          if (bigSizeIndex.value >= 3) {
            bigSizeIndex.value = 0
            pageIndex.value = 7
          }
        }
        else if (pageIndex.value == 7) {
          bigSizeIndex.value++
          if (bigSizeIndex.value >= 1 && bigSizeIndex.value < 3) {
            container.value.style.top = `-730%`
          }
          if (bigSizeIndex.value >= 3) {
            bigSizeIndex.value = 0
            pageIndex.value = 8
          }
        }
         else {
          scrollDown()
        }
      }
    } else {
      if (e.detail > 0) {
        scrollDown()
        console.log('bbbbb');
      } else {
        scrollUp()
        console.log('cccccc');
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

onMounted(() => {
  // window.addEventListener('wheel', handleWheel)
  emitter.on('BACKPAGETOP', (res) => {
    handleScrolltoTop()
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
})

watch(
  () => pageIndex.value,
  (newValue, oldValue) => {
    if (newValue == 0) {
      emitter.emit('changHeaderBack', {
        isDark: true,
        activeBackgroundColor: '#000000',
        slideChangeBakColor: false
      })
    } else {
      emitter.emit('changHeaderBack', {
        isDark: true,
        activeBackgroundColor: '#000000',
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
}
</style>
