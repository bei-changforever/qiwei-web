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
      <div class="develop-container-bottom" v-if="PAGEWIDTH > 960">
        <div
          v-for="(item, index) in list"
          class="develop-container-bottom-item"
          @click="handleSelect(index)"
          @mouseenter="enter(index)"
          @mouseleave="leave(index)"
        >
          <el-image :src="activeIndex == index ? item.src : item.unactive" :fit="'fill'" />
        </div>
      </div>

      <div class="mobile-bottom" v-else>
        <van-swipe class="my-swipe" :autoplay="3000" lazy-render>
          <van-swipe-item v-for="(item, index) in list" :key="index">
            <el-image :src="item.src" :fit="'fill'" />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, toRefs, watch } from 'vue'
import { getAssetsFile } from '@/utils/tools'
import { useCounterStore } from '@/stores/screenWidth'
const { screenWidth } = toRefs(useCounterStore())
const list = [
  {
    name: '创新',
    src: getAssetsFile('images', '创新选中.png'),
    unactive: getAssetsFile('images', '未选中创新.png')
  },
  {
    name: '专注',
    src: getAssetsFile('images', '专注选中.png'),
    unactive: getAssetsFile('images', '专注未选中.png')
  },
  {
    name: '平衡',
    src: getAssetsFile('images', '平衡选中.png'),
    unactive: getAssetsFile('images', '平衡未选中.png')
  }
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

const PAGEWIDTH = ref(window.innerWidth)
//watch监听屏幕宽度的变化，进行侧边栏的收缩和展开
watch(
  () => screenWidth.value,
  (newVal, oldVal) => {
    PAGEWIDTH.value = newVal
  }
)
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

    .mobile-bottom {
      margin-top: 1vh;
    }
  }
  .van-swipe-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 960px) {
  .develop-scientificall {
    width: 100vw;
    height: auto;
    // padding-top: 5vh;
    padding: 0;

    .develop-scientificall-base-container {
      margin: 0 auto;
      width: var(--base-width);
      transition: all 0.3s ease-in;
      zoom: 1;
      padding: 2vh;
      box-sizing: border-box;
      .develop-container-top {
        width: 100%;
        display: flex;

        .develop-container-left {
          width: 50%;

          .develop-container-left-item {
            .topic {
              width: 100%;
              height: 40px;
              display: none;
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
              // margin-top: 1vh;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: bold;
              font-size: 18px;
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
        margin: 0;
        margin-top: 2vh;
        box-sizing: border-box;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 1vh;

        .develop-container-bottom-item {
          width: 90%;

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
}
</style>
