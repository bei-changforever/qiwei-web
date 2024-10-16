<template>
  <div class="develop-scientificall">
    <div class="develop-scientificall-base-container">
      <div class="develop-container-top">
        <div class="develop-container-left">
          <div class="develop-container-left-item">
            <div class="topic">
              <div class="block"></div>
              <div class="text">SCIENCE</div>
            </div>
            <div class="name">科学配方理念</div>
          </div>
        </div>
      </div>
      <div class="develop-container-bottom">
        <div v-for="(item, index) in list" class="develop-container-bottom-item" @click="handleSelect(index)"
          @mouseenter="enter(index)" @mouseleave="leave(index)">
          <el-image :src="activeIndex == index ? item.src : item.unactive" :fit="'fill'" />

        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { getAssetsFile } from '@/utils/tools'

const list = [
  { name: '创新', src: getAssetsFile('images', '创新选中.png'), unactive: getAssetsFile('images', '未选中创新.png') },
  { name: '专注', src: getAssetsFile('images', '专注选中.png'), unactive: getAssetsFile('images', '专注未选中.png') },
  { name: '平衡', src: getAssetsFile('images', '平衡选中.png'), unactive: getAssetsFile('images', '平衡未选中.png') }
]
const activeIndex = ref(0)
const enter = (index) => {
  activeIndex.value = index
}

const leave = (index) => {
  activeIndex.value = index
}

const handleSelect = (index) => {
  activeIndex.value = index
}
</script>
<style lang="scss" scoped>
.develop-scientificall {
  width: 100vw;
  height: 100vh;
  padding-top: 10vh;

  .develop-scientificall-base-container {
    margin: 0 auto;
    width: var(--base-width);
    transition: all 0.3s ease-in;
    zoom: 1;

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
      margin-top: 5vh;
      width: 100%;
      display: flex;
      gap: 1vw;

      .develop-container-bottom-item {
        width: 33.3%;

        :deep(.el-image) {
          width: 100%;
          height: 100%;
          cursor: pointer;


          &.unactive {
            display: block;
          }

          &.active {
            display: none;
          }
        }


      }
    }
  }
}
</style>
