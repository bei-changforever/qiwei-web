<template>
  <div class="home">
    <el-carousel
      :height="'auto'"
      direction="vertical"
      indicator-position="none"
      motion-blur
      :autoplay="false"
    >
      <el-carousel-item style="height: 850px">
        <div class="swiper-container">111</div>
        <!-- <div class="home-swiper">
          <el-carousel
            ref="carousel"
            v-model="currentIndex"
            :initial-index="currentIndex"
            :interval="5000"
            indicator-position="none"
            motion-blur
            @change="changeHandle"
          >
            <el-carousel-item style="height: 850px" v-for="item in 4" :key="item">
              <el-image
                style="width: 100%; height: 850px"
                :src="getAssetsFile('images', '轮播海报.png')"
                :fit="'cover'"
              />
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
        </div> -->
      </el-carousel-item>
    </el-carousel>

    <!-- <div class="home-swiper">
      <el-carousel
        ref="carousel"
        v-model="currentIndex"
        :initial-index="currentIndex"
        :interval="5000"
        indicator-position="none"
        height="850px"
        motion-blur
        @change="changeHandle"
      >
        <el-carousel-item v-for="item in 4" :key="item">
          <el-image
            style="width: 100%; height: 850px"
            :src="getAssetsFile('images', '轮播海报.png')"
            :fit="'cover'"
          />
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
    
      <div class="home-product">
        <div class="home-product-container">
          <div class="aside">
            <div class="block"></div>
            <div class="text">PRODUCT</div>
          </div>
          <div class="topic">
            <div class="left">热门产品</div>
            <div class="right">
              <div v-for="(item, index) in productType" class="right-item">{{ item }}</div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- <div class="block text-center" style="height: 300px">
    <span class="demonstration">each carousel-item has a different height</span>
    <el-carousel height="auto" autoplay>
      <el-carousel-item style="height: 100px">
        <h3 class="small justify-center" text="2xl">height 100px</h3>
      </el-carousel-item>
      <el-carousel-item style="height: 200px">
        <h3 class="small justify-center" text="2xl">height 200px</h3>
      </el-carousel-item>
      <el-carousel-item style="height: 300px">
        <h3 class="small justify-center" text="2xl">height 300px</h3>
      </el-carousel-item>
    </el-carousel>
  </div> -->
  </div>
</template>
<script setup lang="ts">
import { getAssetsFile } from '@/utils/tools'

import { ref } from 'vue'
const productType = ['底纹', '彩妆', '护肤', '清洁', '隔离']
const carousel = ref()
const currentIndex = ref(0)

// 轮播图自动切换，赋值为自定义指示器
const changeHandle = (e) => {
  currentIndex.value = e
}
// 通过自定义指示器切换，赋值给轮播图
const changeIndicator = (index) => {
  carousel.value.setActiveItem(index)
  currentIndex.value = index
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
.swiper-container {
  width: 100%;
  height: 850px;
  background-color: pink;
}
// .carousel-item {
//   color: #475669;
//   opacity: 0.75;
//   margin: 0;
//   text-align: center;
// }

// .el-carousel__item h3 {
//   color: #475669;
//   opacity: 0.75;
//   display: flex;
//   align-items: center;
//   margin: 0;
//   text-align: center;
//   height: 100%;
// }

// .el-carousel__item:nth-child(2n) {
//   background-color: #99a9bf;
// }

// .el-carousel__item:nth-child(2n + 1) {
//   background-color: #d3dce6;
// }
// .home {
//   width: 100%;
//   .home-swiper {
//     position: relative;
//     width: 100%;
//     height: 850px;
//     .custom-indicator {
//       position: absolute;
//       bottom: 50px;
//       left: 50%;
//       transform: translateX(-50%);
//       padding: 20px;
//       box-sizing: border-box;
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//       gap: 24px;
//       .custom-indicator-item {
//         position: relative;
//         width: 6px;
//         height: 6px;
//         background-color: rgba(255, 255, 255, 0.6);
//         border-radius: 50%;

//         &.active {
//           background-color: white;
//           &::after {
//             content: '';
//             position: absolute;
//             top: 50%;
//             left: 50%;
//             transform: translate(-50%, -50%);
//             width: 18px;
//             height: 18px;
//             background-color: transparent;
//             border-radius: 50%;
//             border: 2px solid white;
//           }
//         }
//       }
//     }
//   }
//   .home-product {
//     width: 100%;
//     height: 850px;
//     background-color: pink;

//     .home-product-container {
//       margin: 0 auto;
//       width: var(--base-width);
//       background-color: skyblue;
//       .aside {
//         display: flex;
//         .text {
//           font-weight: 400;
//           font-size: 22px;
//           color: #f3a7a5;
//         }

//         .block {
//           width: 6px;
//           height: 16px;
//           background-color: #f3a7a5;
//           border-radius: 1px;
//         }
//       }
//     }
//   }
// }
</style>
