<template>
  <!-- <div class="home-base-container">
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
  </div> -->
  <div class="cus-container">
    <div class="cus-page" ref="pagecontainer">
      <div class="cus-page-item" v-for="(comp, index) in domArr[0].domarr" :key="index">
        <component :is="comp" />
      </div>
      <div class="cus-page-item">
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
import _ from 'lodash'
const domArr = shallowRef([
  {
    id: 'home',
    domarr: [Banner, HomeView, BussinessInfo, Advantage, DevelopMent, Quality, DevelopMent2, Added]
  }
])

const pageIndex = ref(0)
const pagecontainer = ref(null)
const doms = ref([])

// 处理滚轮事件的方法
const handleWheel = (event) => {
  const deltaY = event.deltaY
  if (deltaY < 0) {
    // console.log('上滚')
    if (pageIndex.value == 0) {
      return
    } else {
      pageIndex.value--
    }
  } else if (deltaY > 0) {
    console.log('下滚')
    if (pageIndex.value == doms.value.length - 1) {
      return
    } else {
      pageIndex.value++
      console.log('pageIndex==========>', pageIndex.value)

      if (doms.value[pageIndex.value]) {
        pagecontainer.value.style.top =
          '-' + doms.value[pageIndex.value].getBoundingClientRect().top + 'px'
        console.log(doms.value[pageIndex.value].getBoundingClientRect().top)
        console.log(doms.value[pageIndex.value])
      }
    }
  }
}
onMounted(() => {
  nextTick(() => {
    doms.value = document.querySelectorAll('.cus-page-item')
    // console.log(doms.value)
    window.addEventListener(
      'wheel',
      _.throttle(handleWheel, 5000, {
        leading: true, // 延长开始后调用
        trailing: false // 延长结束前调用
      })
    )
  })

  // pagecontainer.value.style.top = -dom[pageIndex.value].getBoundingClientRect().top + 'px'
})
onBeforeUnmount(() => {
  window.removeEventListener('wheel', handleWheel)
})

watch(
  () => pageIndex.value,
  (newValue, oldValue) => {
    // console.log(newValue)
    // pagecontainer.value.style.top = -doms.value[newValue].getBoundingClientRect().top + 'px'
    // if (newValue == 0) {
    //   emitter.emit('changHeaderBack', {
    //     isDark: true,
    //     activeBackgroundColor: '#000000',
    //     slideChangeBakColor: false
    //   })
    // } else {
    //   emitter.emit('changHeaderBack', {
    //     isDark: true,
    //     activeBackgroundColor: '#000000',
    //     slideChangeBakColor: true
    //   })
    // }
  }
)
</script>
<style scoped lang="scss">
.cus-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .cus-page {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    border: 1px solid red;
    .cus-page-item {
      border: 1px solid orange;
    }
  }
}
</style>
