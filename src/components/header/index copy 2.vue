<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="header">
    <div
      class="fixed-box"
      :style="{ backgroundColor: changeBackGroundColor ? '#000000' : 'transparent' }"
    >
      <div class="header-content">
        <div class="logo">
          <el-image :src="getAssetsFile('icon', 'LOGO.png')" :fit="'fill'" />
        </div>
        <div class="text">
          <div
            v-for="(item, index) in HeaderInfo"
            :class="['text-item', activeIndex == index ? 'active' : '']"
            :key="index"
            @click="handleSelect(index)"
          >
            {{ item }}
          </div>
        </div>
        <div class="icon">
          <el-image
            class="unactive-image"
            v-for="(item, index) in IconInfo"
            :key="index"
            :src="item"
            :fit="'fill'"
          />
          <div class="active">≡</div>
        </div>
      </div>
    </div>

    <div class="header-swiper" ref="carouselbox" v-if="!changeBanner">
      <el-carousel
        ref="carousel"
        v-model="currentIndex"
        :initial-index="currentIndex"
        :interval="5000"
        height="50vw"
        indicator-position="none"
        motion-blur
        @change="changeHandle"
      >
        <el-carousel-item v-for="item in 4" :key="item">
          <el-image :src="getAssetsFile('images', '轮播海报.png')" :fit="'cover'" />
        </el-carousel-item>
      </el-carousel>
      <div class="custom-indicator">
        <div
          v-for="(item, index) in 4"
          :key="index"
          :class="['custom-indicator-item', currentIndex == index ? 'active' : '']"
          @click="changeIndicator(index)"
        ></div>
      </div>
    </div>
    <div class="header-swiper" ref="carouselbox" v-else>
      <van-swipe style="height: 55vw" class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in 4" :key="item">
          <van-image
            width="100%"
            height="100%"
            :src="getAssetsFile('images', '轮播海报.png')"
            fit="fill"
        /></van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { getAssetsFile } from '@/utils/tools'
import { isMobile } from '@/utils/equipment'
const HeaderInfo = ['首页', '产品中心', '业务合作', '研发中心', '关于奇伟', '联系我们']
const IconInfo = [
  getAssetsFile('icon', 'search.png'),
  getAssetsFile('icon', 'share.png'),
  getAssetsFile('icon', 'collect.png')
]
const carousel = ref()
const currentIndex = ref(0)
const activeIndex = ref(0)
const changeBanner = ref(false)
const carouselbox = ref(null)
const changeBackGroundColor = ref(false)
//获取屏幕宽度
const screenWidth = ref(window.innerWidth)
const handleSelect = (key: number) => {
  if (activeIndex.value == key) return
  activeIndex.value = key
}

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

    // if (screenWidth.value < 960) {
    //   carouselbox.value.scrollBy({
    //     top: 0,
    //     left: 0,
    //     behavior: 'smooth'
    //   })
    // }
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
.header {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .fixed-box {
    width: 100%;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s ease-in-out;

    .header-content {
      width: var(--base-width);
      height: var(--header-height);
      display: flex;
      align-items: center;
      .logo {
        width: 15%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        :deep(.el-image) {
          width: 223px;
          height: 54px;
          cursor: pointer;
        }
      }
      .text {
        width: 70%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 10%;
        .text-item {
          white-space: nowrap;
          font-weight: 400;
          font-size: 14px;
          color: #ffffff;
          cursor: pointer;
          &.active {
            color: #f3a7a5;
            border-bottom: 3px solid #f3a7a5;
          }
        }
      }
      .icon {
        width: 15%;
        height: 100%;
        :deep(.el-image) {
          width: 20px;
          height: 20px;
        }
        cursor: pointer;
        display: flex;
        gap: 10%;
        align-items: center;
        justify-content: flex-end;
        .active {
          display: none;
        }
      }
    }
  }

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
}

@media (min-width: 960px) and (max-width: 1220px) {
  .header {
    .fixed-box {
      .header-content {
        .logo {
          width: 20%;
        }
        .text {
          width: 60%;
          gap: 5%;
        }
        .icon {
          width: 20%;
        }
      }
    }
  }
}

@media (max-width: 960px) {
  .header {
    .fixed-box {
      .header-content {
        padding: 10px;
        box-sizing: border-box;
        .logo {
          width: 80%;
          :deep(.el-image) {
            width: 150px;
            height: 45px;
            cursor: pointer;
          }
        }
        .text {
          display: none !important;
        }
        .icon {
          width: 20%;
          .unactive-image {
            display: none;
          }

          .active {
            width: 40px;
            height: 40px;
            border: 2px solid white;
            border-radius: 2px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            color: white;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>