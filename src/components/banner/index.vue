<template>

    <div class="header-swiper" ref="carouselbox" v-if="!changeBanner">
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
    <div class="header-swiper" ref="carouselbox" v-else>
        <van-swipe style="height: 55vw" class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in 4" :key="item">
                <van-image width="100%" height="100%" :src="getAssetsFile('images', '轮播海报.png')"
                    fit="fill" /></van-swipe-item>
        </van-swipe>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { getAssetsFile } from '@/utils/tools'
import { isMobile } from '@/utils/equipment'
const carousel = ref()
const currentIndex = ref(0)
const activeIndex = ref(0)
const changeBanner = ref(false)
const carouselbox = ref(null)
const changeBackGroundColor = ref(false)
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

// 处理滚轮事件的方法
const handleWheel = (event) => {
    const deltaY = event.deltaY
    if (deltaY < 0) {
        if (carouselbox.value.getBoundingClientRect().top == 0) {
            changeBackGroundColor.value = false
        }
        // 向上滚动
    } else if (deltaY > 0) {
        // 向下滚动
        if (carouselbox.value.getBoundingClientRect().top < 20) {
            changeBackGroundColor.value = true
        }
    }
}

onMounted(() => {
    if (isMobile()) {
        changeBanner.value = true
    } else {
        changeBanner.value = false
    }
    window.addEventListener('resize', handleResize)

    window.addEventListener('wheel', handleWheel)
})
//watch监听屏幕宽度的变化，进行侧边栏的收缩和展开

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