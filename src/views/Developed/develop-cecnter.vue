<template>
  <div class="develop-center">
    <div class="develop-center-base-container">
      <div class="control-button">
        <div
          :class="['control-button-item', activeIndex == index ? 'active' : '']"
          v-for="(item, index) in list"
          :key="index"
          @click="handleSelect(index)"
        >
          {{ item }}
        </div>
      </div>

      <div class="develop-container-top">
        <div class="develop-container-left">
          <div class="develop-container-left-item">
            <div class="topic">
              <div class="block"></div>
              <div class="text">BUSINESS</div>
            </div>
            <div class="name">业务范围</div>
          </div>
        </div>
      </div>

      <div class="develop-container-bottom">
        <div class="develop-container-bottom-left">
          <div class="develop-cotainer-bottom-left-item">
            <el-image :src="getAssetsFile('images', '研发图片1.png')" :fit="'fill'" alt="" />
          </div>
          <div class="develop-cotainer-bottom-left-item" style="height: 300px">
            <el-image :src="getAssetsFile('images', '研发图片2.png')" :fit="'fill'" alt="" />
          </div>
          <div class="develop-cotainer-bottom-left-item">
            <el-image :src="getAssetsFile('images', '研发图片5.png')" :fit="'fill'" alt="" />
          </div>

          <div class="develop-cotainer-bottom-left-item">
            <el-image :src="getAssetsFile('images', '研发图片3.png')" :fit="'fill'" alt="" />
          </div>

          <div class="develop-cotainer-bottom-left-item" style="height: 525px">
            <el-image :src="getAssetsFile('images', '研发图片4.png')" :fit="'fill'" alt="" />
          </div>
        </div>
        <!-- <div class="develop-container-bottom-right">
          <div class="develop-cotainer-bottom-right-item">
            <el-image :src="getAssetsFile('images', '研发图片4.png')" :fit="'fill'" alt="" />
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { getAssetsFile } from '@/utils/tools'
import emitter from '@/utils/mitt'
const list = ['研发中心', '科学配方理念', '大数据平台', '专利技术']
const activeIndex = ref(0)
</script>
<style lang="scss" scoped>
.develop-center {
  width: 100vw;
  height: 100vh;

  .develop-center-base-container {
    margin: 0 auto;
    width: var(--base-width);
    transition: all 0.3s ease-in;
    zoom: 1;

    .control-button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1vw;
      margin-bottom: 5vh;

      .control-button-item {
        width: 150px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family:
          Microsoft YaHei,
          Microsoft YaHei;
        font-weight: 400;
        font-size: 14px;
        color: #999999;
        background-color: #f6f9ff;
        border-radius: 20px 20px 20px 20px;
        cursor: pointer;

        &.active {
          background-color: #f3a7a5;
          color: white;
        }
      }
    }

    .develop-container-top {
      width: 100%;
      display: flex;

      .develop-container-left {
        width: 50%;

        .develop-container-left-item {
          .topic {
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            gap: 10px;

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
      }

      .business-container-right {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 1vw;

        .business-container-right-item {
          margin-top: 4vh;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 1vw;
          cursor: pointer;

          .text {
            width: 80px;
            height: 32px;

            border-radius: 18px 18px 18px 18px;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 14px;
            color: #333333;
            display: flex;
            align-items: center;
            justify-content: center;

            &.active {
              background-color: #2d2d2d;
            }
          }

          .line {
            width: 18px;
            height: 1px;
            background: #e0e0e0;
            border-radius: 0px 0px 0px 0px;
          }
        }
      }
    }

    .develop-container-bottom {
      width: 100%;
      //   height: 500px;
      //   background-color: pink;
      //   display: flex;
      .develop-container-bottom-left {
        margin: 1vw;
        column-count: 3;
        column-gap: 0.5vw;
        // display: flex;
        // flex-flow: column wrap;
        .develop-cotainer-bottom-left-item {
          //   margin: 10px;
          //   width: calc(100% / 3 - 20px);
          cursor: pointer;
          :deep(.el-image) {
            width: 100%;
            height: 100%;
          }
        }
      }

      .develop-container-bottom-right {
      }
    }
  }
}
</style>
