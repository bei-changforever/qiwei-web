<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="header-swiper" ref="carouselbox"  v-if="!changeBanner">
        <el-carousel ref="carousel" v-model="currentIndex" :initial-index="currentIndex" :interval="5000" height="50vw"
            indicator-position="none" motion-blur @change="changeHandle">
            <el-carousel-item v-for="item in 4" :key="item">
                <el-image :src="getAssetsFile('images', '轮播海报.png')" :fit="'cover'" />
            </el-carousel-item>
        </el-carousel>
        <div class="custom-indicator">
            <div v-for="(item, index) in 4" :key="index"
                :class="['custom-indicator-item', currentIndex == index ? 'active' : '']"
                @click="changeIndicator(index)"></div>
        </div>
    </div>
    <div class="header-swiper" ref="carouselbox"  v-else>
        <van-swipe style="height: 50vw" class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in 4" :key="item">
                <van-image width="100%" height="100%" :src="getAssetsFile('images', '轮播海报.png')"
                    fit="fill" /></van-swipe-item>
        </van-swipe>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted, watch,onBeforeUnmount } from 'vue'
import { getAssetsFile } from '@/utils/tools'
import { isMobile } from '@/utils/equipment'
const carousel = ref()
const currentIndex = ref(0)
const changeBanner = ref(false)
//获取屏幕宽度
const screenWidth = ref(window.innerWidth)
// 轮播图自动切换，赋值为自定义指示器
const changeHandle = (e) => {
    currentIndex.value = e
}
// 通过自定义指示器切换，赋值给轮播图
const changeIndicator = (index) => {
    carousel.value.setActiveItem(index)
    currentIndex.value = index
}
const handleResize = () => {
    screenWidth.value = window.innerWidth
}

const carouselbox = ref(null)
const changeBackGroundColor = ref(false)
// 处理滚轮事件的方法
const handleWheel = (event) => {

    
  const deltaY = event.deltaY
  if (deltaY < 0) {

    
    // if (carouselbox.value.getBoundingClientRect().top == 0) {
    //   changeBackGroundColor.value = false
    // }
    // if (carouselbox.value.getBoundingClientRect().top == 0) {
    //   changeBackGroundColor.value = false
    // }
    // 向上滚动
  } else if (deltaY > 0) {
    // 向下滚动
    // if (carouselbox.value.getBoundingClientRect().top < 20) {
    //   changeBackGroundColor.value = true
    // }
    
  }
}

// onMounted(() => {
//   window.addEventListener('wheel', handleWheel)
// })




onMounted(() => {
    console.log(carouselbox.value);
    
    if (isMobile()) {
        changeBanner.value = true
    } else {
        changeBanner.value = false
    }
    window.addEventListener('wheel', handleWheel)
    window.addEventListener('resize', debounce(handleResize, 1500, true))
})
// 在防抖函数中第三个参数immediate，可以实现这种效果
const debounce = (func, delay, immediate) => {
    let timer;
    return function () {
        if (timer) clearTimeout(timer);
        if (immediate) {
            // 复杂的防抖函数
            // 判断定时器是否为空，如果为空，则会直接执行回调函数
            let firstRun = !timer;
            // 不管定时器是否为空，都会重新开启一个新的定时器,不断输入，不断开启新的定时器，当不在输入的delay后，再次输入就会立即执行回调函数
            timer = setTimeout(() => {
                timer = null;
            }, delay);
            if (firstRun) {
                func.apply(this, arguments);
            }
            // 简单的防抖函数
        } else {
            timer = setTimeout(() => {
                func.apply(this, arguments);
            }, delay);
        }
    };
}
//watch监听屏幕宽度的变化，进行侧边栏的收缩和展开
watch(screenWidth, (newVal, oldVal) => {
    if (isMobile()) {
        changeBanner.value = true
    } else {
        changeBanner.value = false
    }
})


// 在组件卸载前移除监听器
onBeforeUnmount(() => {
  window.removeEventListener('wheel', handleWheel)
})
</script>
<style lang="scss" scoped>
.header-swiper {
    position: relative;
    width: 100%;

    :deep(.el-image) {
        width: 100%;
        height: auto;
    }

    .custom-indicator {
        position: absolute;
        bottom: 2vw;
        left: 50%;
        transform: translateX(-50%);
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;

        .custom-indicator-item {
            position: relative;
            width: 6px;
            height: 6px;
            background-color: rgba(255, 255, 255, 0.6);
            border-radius: 50%;
            cursor: pointer;

            &.active {
                background-color: white;

                &::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 18px;
                    height: 18px;
                    background-color: transparent;
                    border-radius: 50%;
                    border: 2px solid white;
                }
            }
        }
    }
}
</style>