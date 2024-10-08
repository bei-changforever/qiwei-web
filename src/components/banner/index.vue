<template>
  <div class="container">
    <div class="arrow l">
      <el-image
        :src="getAssetsFile('icon', 'l.png')"
        :fit="'fill'"
        @click="prev"
        @mouseover="handleMouseOver"
        @mouseout="handleMouseOut"
      />
    </div>
    <div
      v-for="(item, index) in slide"
      :key="index"
      :class="['slide', currentIndex == index ? 'active' : 'none']"
      :style="{ 'background-image': 'url(' + getAssetsFile('images', '轮播海报.png') + ')' }"
    >
      <div class="caption">
        <h3>{{ index }}</h3>
      </div>
    </div>

    <div class="arrow r">
      <el-image
        :src="getAssetsFile('icon', 'r.png')"
        :fit="'fill'"
        @click="next"
        @mouseover="handleMouseOver"
        @mouseout="handleMouseOut"
      />
    </div>

    <div class="custom-indicator">
      <div
        v-for="(item, index) in 5"
        :key="index"
        :class="['custom-indicator-item', currentIndex == index ? 'active' : '']"
        @click="changeIndicator(index)"
      ></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, nextTick, onMounted, onUnmounted } from 'vue'
import { getAssetsFile } from '@/utils/tools'
const currentIndex = ref(0)
const slide = ref([
  {
    id: 1,
    title: '轮播图1',
    url: 'https://picsum.photos/id/237/200/300'
  },
  {
    id: 2,
    title: '轮播图2',
    url: 'https://picsum.photos/id/237/200/300'
  },
  {
    id: 3,
    title: '轮播图3',
    url: 'https://picsum.photos/id/237/200/300'
  },
  {
    id: 4,
    title: '轮播图4',
    url: 'https://picsum.photos/id/237/200/300'
  },
  {
    id: 5,
    title: '轮播图5',
    url: 'https://picsum.photos/id/237/200/300'
  }
]) as any
const timer = ref(null)
const prev = () => {
  if (currentIndex.value <= 0) {
    currentIndex.value = slide.value.length - 1
  } else {
    currentIndex.value--
  }
}
const next = () => {
  if (currentIndex.value >= slide.value.length - 1) {
    currentIndex.value = 0
  } else {
    currentIndex.value++
  }
}

const handleMouseOver = () => {
  clearInterval(timer.value)
}
const handleMouseOut = () => {
    nextTick(() => {
      timer.value = setInterval(() => {
        next()
      }, 10000)
    })
}
// 通过自定义指示器切换，赋值给轮播图
const changeIndicator = (index) => {
  currentIndex.value = index
}
onMounted(() => {
  // 自动轮播
  timer.value = setInterval(() => {
    next()
  }, 10000)
})

onUnmounted(() => {
  if (timer.value) {
    clearInterval(timer.value)
  }
})
</script>
<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  /* 相对定位 */
  position: relative;
  /* 背景颜色· */
  background: #aad5f6;

  overflow: hidden;
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

.slide {
  width: 100%;
  height: 100vh;
  /* 图像铺满整个背景区域, */
  background-size: cover;
  background-position: center;
  /* 相对定位 */
  position: absolute;
  top: 0;
  left: 0;
  overflow-x: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  transition: all 1s;

  &.active {
    opacity: 1;
  }
  &.none {
    opacity: 0;
  }
}

.caption {
  background: rgba(0, 0, 0, 0.03);
  width: 100%;
  /* 绝对定位 */
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 40px 0px;
}

.container h3 {
  color: #fff;
  text-align: center;
  font-size: 50px;
  padding: 18px;
}

.container p {
  max-width: 600px;
  width: 90%;
  margin: 0 auto;
  color: #ccc;
  text-align: center;
  font-size: 18px;
  line-height: 1.5em;
}

.arrow {
  /* 绝对定位 */
  width: 60px;
  height: 60px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 100;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  transform: background 500ms;
}

:deep(.el-image) {
  width: 100%;
  height: 100%;
}
.arrow:hover {
  background: rgba(0, 0, 0, 0.4);
}

.l {
  left: 2vw;
}
.r {
  right: 2vw;
}
</style>
