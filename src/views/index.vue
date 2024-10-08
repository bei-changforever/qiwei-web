<template>
  <header id="header">
    <CusHeader :slideChangeBakColor="changeBackGroundColor" :isDark="isDarkPage" :activeBackgroundColor="activeColor" />
  </header>
  <div class="main-okj-container" ref="container" v-if="domIndex !== 1">
    <div class="boxapi" v-for="(comp, index) in domArr[domIndex].domarr" :key="index">
      <component :is="comp" />
    </div>
    <div class="boxapi">
      <footer id="footer">
        <CusFooter />
      </footer>
    </div>
  </div>
  <div class="main-okj-container-nofull" ref="nofull" v-else>
    <div class="nofull-boxapi" v-for="(comp, index) in domArr[domIndex].domarr" :key="index">
      <component :is="comp" />
    </div>
    <footer id="footer">
      <CusFooter />
    </footer>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick, shallowRef, reactive } from 'vue'
import Banner from '@/components/banner/index.vue'
import HomeView from '@/views/Home/product.vue'
import BussinessInfo from '@/views/Home/business-info.vue'
import Advantage from '@/views/Home/advantage.vue'
import DevelopMent from '@/views/Home/development.vue'
import Quality from '@/views/Home/quality.vue'
import DevelopMent2 from '@/views/Home/development2.vue'
import Added from '@/views/Home/added.vue'
import productBanner from '@/views/Product/product-banner.vue'
import ProductContainer from '@/views/Product/product-container.vue'
import emitter from '@/utils/mitt'
const domArr = shallowRef([
  {
    id: 'home',
    domarr: [Banner, HomeView, BussinessInfo, Advantage, DevelopMent, Quality, DevelopMent2, Added]
  },
  {
    id: 'product',
    domarr: [productBanner, ProductContainer]
  }
])

let domIndex = ref(0)
const nofull = ref(null)
const changeBackGroundColor = ref(false)
const activeColor = ref('#000000')
const container = ref(null)
const isDarkPage = ref(true)
// 处理滚轮事件的方法
const handleWheel = (event) => {
  const deltaY = event.deltaY
  // 存储上一次变量

  if (deltaY < 0) {
    // 向上滚动
  } else if (deltaY > 0) {
    // 向下滚动
  }
}

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
  if (pageIndex == 8) {
    if (screenWidth.value >= 1520 && screenWidth.value <= 1920) {
      container.value.style.top = `-${pageIndex - 1}56%`
    }

    if (screenWidth.value <= 1520 && screenWidth.value >= 1440) {
      container.value.style.top = `-${pageIndex - 1}56%`
    }

    if (screenWidth.value <= 1440 && screenWidth.value >= 1220) {
      container.value.style.top = `-${pageIndex - 1}56%`
    }

    if (screenWidth.value <= 1220 && screenWidth.value >= 960) {
      container.value.style.top = `-${pageIndex - 1}56%`
    }

    if (screenWidth.value <= 960) {
      container.value.style.top = `-${pageIndex - 1}56%`
    }
  } else {
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
  nextTick(() => {
    console.log("点击回到顶部");
    if (domIndex.value == 0) {
      scrollToPage(0)
    }
    if (domIndex.value == 1) {
      console.log(nofull.value.getBoundingClientRect());

      // window.scrollTo({
      //   top: 0,
      //   behavior: 'smooth' // 可选，使滚动平滑
      // });

    }
  })

}



onMounted(() => {
  // window.addEventListener('wheel', handleWheel)

  emitter.on('DOMINDEX', (res) => {
    domIndex.value = res
    window.scrollTo({
      // top: document.documentElement.offsetHeight, //回到底部
      top: 0, //回到顶部
      left: 0,
      behavior: "smooth", //smooth 平滑；auto:瞬间
    });
    if (domIndex.value == 0) {
      isDarkPage.value = true
      changeBackGroundColor.value = false
      activeColor.value = '#000000'
    }
    if (domIndex.value == 1) {
      isDarkPage.value = true
      activeColor.value = 'white',
        changeBackGroundColor.value = false
    }
  })

  emitter.on('changHeaderBack', res => {

    isDarkPage.value = res.isDark
    activeColor.value = res.activeBackgroundColor
    changeBackGroundColor.value = res.slideChangeBakColor


  })


  emitter.on('BACKPAGETOP', res => {
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
  emitter.off('DOMINDEX')
  emitter.off('changHeaderBack')
  emitter.off('BACKPAGETOP')
})

watch(
  () => pageIndex.value,
  (newValue, oldValue) => {
    if (newValue == 0) {
      changeBackGroundColor.value = false
    } else {
      changeBackGroundColor.value = true
    }
  }
)
//watch监听屏幕宽度的变化，进行侧边栏的收缩和展开
watch(screenWidth, (newVal, oldVal) => { })
</script>
<style scoped lang="scss">
.main-okj-container {
  width: 100%;
  height: 100%;
  /* 绝对定位 */
  position: absolute;
  left: 0;
  top: 0;
  /* 添加过渡动画 */
  transition: all 0.3s ease-in-out;
}

.main-okj-container-nofull {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
}
</style>
