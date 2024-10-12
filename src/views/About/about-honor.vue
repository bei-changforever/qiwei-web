<template>
  <div class="about-honor" id="about-honor"> 
    <div class="about-honor-base-container">
      <div class="about-base-container-top">
        <div class="T-left">
          <div class="topic">
            <div class="block"></div>
            <div class="text">HONOR</div>
          </div>
          <div class="name">荣誉资质</div>
        </div>
        <div class="T-right">
          <div class="swiper-btn">
            <div class="prev">
              <el-image :src="getAssetsFile('icon', 'left.png')" :fit="'fill'" />
            </div>
            <div class="next">
              <el-image :src="getAssetsFile('icon', 'right.png')" :fit="'fill'" />
            </div>
          </div>
        </div>
      </div>
      <div class="about-base-container-bottom">
        <div class="about-base-container-bottom-content">
          <div
            :class="['about-honor-content-item', activeIndex == index ? 'active' : '']"
            v-for="(item, index) in list"
            :key="index"
            @click="handleSelect(index)"
          >
            <el-image :src="item.imgSrc" :fit="'fill'" />
            <span>{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { getAssetsFile } from '@/utils/tools'
const activeIndex = ref(0)
const list = [
  {
    title: '高新技术企业证书',
    imgSrc: getAssetsFile('images', '证书框1.png')
  },
  {
    title: '广东省日化商会常务理事单位',
    imgSrc: getAssetsFile('images', '证书框2.png')
  },
  {
    title: '科技发明成果证明',
    imgSrc: getAssetsFile('images', '证书框3.png')
  },
  {
    title: '名优高品证书（粉饼）',
    imgSrc: getAssetsFile('images', '证书框4.png')
  },
  {
    title: '市级企业技术中心',
    imgSrc: getAssetsFile('images', '证书框5.png')
  },
  {
    title: 'a-GMPC资质证书',
    imgSrc: getAssetsFile('images', '证书框6.png')
  },
  {
    title: 'c-ISO22716资质证书',
    imgSrc: getAssetsFile('images', '证书框7.png')
  },
  {
    title: '知识产权认证证书',
    imgSrc: getAssetsFile('images', '证书框8.png')
  }
]

const handleSelect = (index) => {
  activeIndex.value = index
}
</script>
<style lang="scss" scoped>
.about-honor {
  width: 100vw;
  height: 100vh;
  padding-top: 6vh;
  box-sizing: border-box;
  background-color: white;
  .about-honor-base-container {
    margin: 0 auto;
    width: var(--base-width);
    transition: all 0.3s ease-in;
    zoom: 1;

    .about-base-container-top {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .T-left {
        .topic {
          width: 100%;
          height: 40px;
          display: flex;
          align-items: center;
          gap: 1vw;

          .text {
            font-weight: 400;
            font-size: var(--aside-fontSize);
            color: #f3a7a5;
          }

          .block {
            width: 6px;
            height: var(--aside-block);
            border-radius: 1px;
            background-color: #f3a7a5;
          }
        }

        .name {
          margin-top: 1vh;
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;
          font-weight: bold;
          font-size: var(--topic-fontSize);
          color: #333333;
        }
      }

      .T-right {
        .swiper-btn {
          margin-top: 5vh;
          display: flex;
          gap: 1vw;

          :deep(.el-image) {
            width: 40px;
            height: 40px;
            cursor: pointer;
          }
        }
      }
    }

    .about-base-container-bottom {
      width: 100%;
      margin-top: 5vh;
      .about-base-container-bottom-content {
        width: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1vw;
        .about-honor-content-item {
          width: 24%;
          height: 30vh;
          background-color: #f8f8f8;
          border-radius: 20px 20px 20px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1vw;
          box-sizing: border-box;
          cursor: pointer;
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;
          font-weight: 400;
          font-size: 20px;
          color: #333333;

          &.active {
            color: #f3a7a5;
            background-color: #ffffff;
            box-shadow:
              rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
              rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
          }
        }
      }
    }
  }
}
</style>
