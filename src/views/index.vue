<template>


  <!-- <div class="main-container" >
    <header id="header">
      <CusHeader :slkbg="changeBackGroundColor" />
    </header>
    <div class="flex-main" ref="flexMain">
      <Banner />
      <HomeView />
      <BussinessInfo />
      <Advantage />
      <DevelopMent />
      <Quality />
      <DevelopMent2 />
      <Added />
      <footer id="footer">
        <CusFooter />
      </footer>
    </div>
  </div> -->
  <header id="header">
    <CusHeader :slkbg="changeBackGroundColor" />
  </header>
  <div class="main-okj-container" ref="container">
    <div class="boxapi">
      <Banner />
    </div>
    <div class="boxapi">
      <HomeView />
    </div>
    <div class="boxapi">
      <BussinessInfo />
    </div>
    <div class="boxapi">
      <Advantage />
    </div>
    <div class="boxapi">
      <DevelopMent />
    </div>
    <div class="boxapi">
      <Quality />
    </div>
    <div class="boxapi">
      <DevelopMent2 />
    </div>
    <div class="boxapi">
      <Added />
    </div>
    <div class="boxapi">
      <footer id="footer">
        <CusFooter />
      </footer>
    </div>
  </div>




</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import HomeView from '@/views/Home/product.vue'
import BussinessInfo from '@/views/Home/business-info.vue'
import Advantage from '@/views/Home/advantage.vue'
import DevelopMent from '@/views/Home/development.vue'
import Quality from '@/views/Home/quality.vue'
import DevelopMent2 from '@/views/Home/development2.vue'
import Added from '@/views/Home/added.vue'
const flexMain = ref(null)
const changeBackGroundColor = ref(false)


const container = ref(null)


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
let pageIndex = ref(0);
// 定义是否允许滚动
let pageScroll = ref(true);
// 定义上一次页面的索引
let prevIndex = ref(0);

let boxapis = ref([])

// 向上滚动
function scrollUp() {
  if (pageIndex.value > 0 && pageScroll.value) {
    prevIndex.value = pageIndex.value;
    pageIndex.value--;
    scrollToPage(pageIndex.value);
  } else if (pageIndex.value <= 0) {
    pageIndex.value = 0;
  }
}



// 向下滚动
function scrollDown() {
  if (pageIndex.value < boxapis.value.length - 1 && pageScroll.value) {
    prevIndex.value = pageIndex.value;
    pageIndex.value++;
    scrollToPage(pageIndex.value);
  } else if (pageIndex.value >= boxapis.value.length - 1) {
    pageIndex.value = boxapis.value.length - 1;
  }
}
// 滚动到指定页面
function scrollToPage(pageIndex) {
  if(pageIndex == 8) {
    container.value.style.top = `-${pageIndex-1}55%`;
  }else {
    container.value.style.top = `-${pageIndex}00%`;
  }
  

  
  
  pageScroll.value = false;
  scrollTimer();
}
// 设置定时器，等待500毫秒后，允许再次滚动
function scrollTimer() {
  setTimeout(() => {
    pageScroll.value = true;
  }, 500);
}
// 鼠标滚轮事件
function mouseWheel(e) {
  if (e.wheelDelta) {
    if (e.wheelDelta > 0) {
      scrollUp();
    } else {
      scrollDown();
    }
  } else {
    if (e.detail > 0) {
      scrollDown();
    } else {
      scrollUp();
    }
  }
}

onMounted(() => {

  // window.addEventListener('wheel', handleWheel)

  // 添加鼠标滚轮事件
  document.onmousewheel = mouseWheel;
  document.addEventListener('DOMMouseScroll', mouseWheel, false);
  // 设置滚动记录
  history.scrollRestoration = 'manual';


  nextTick(() => {
    boxapis.value = document.querySelectorAll('.boxapi');
    container.value.style.height = `${boxapis.length}00%`;
  })


})
onBeforeUnmount(() => {
  document.removeEventListener('DOMMouseScroll', mouseWheel)
})

watch(() => pageIndex.value, (newValue, oldValue) => {
  if (newValue == 0) {
    changeBackGroundColor.value = false
  } else {
    changeBackGroundColor.value = true
  }


});


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
</style>
