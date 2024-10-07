<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="header">
    <div class="fixed-box" :style="{ backgroundColor: slkbg ? '#000000' : 'transparent' }">
      <div class="header-content">
        <div class="logo">
          <el-image :src="getAssetsFile('icon', 'LOGO.png')" :fit="'fill'" />
        </div>
        <div class="text">
          <div v-for="(item, index) in HeaderInfo" :class="['text-item', activeIndex == index ? 'active' : '']"
            :key="index" @click="handleSelect(index)">
            {{ item }}
          </div>
        </div>
        <div class="icon">
          <el-image class="unactive-image" v-for="(item, index) in IconInfo" :key="index" :src="item" :fit="'fill'" />
          <div class="active">≡</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { getAssetsFile } from '@/utils/tools'
const changeBackGroundColor = ref(false)
const props = defineProps({
  swiperActiveIndex: {
    type: Number,
    default: 0
  },
  slkbg: {
    type: Boolean,
    default: false
  }
})

const HeaderInfo = ['首页', '产品中心', '业务合作', '研发中心', '关于奇伟', '联系我们']
const IconInfo = [
  getAssetsFile('icon', 'search.png'),
  getAssetsFile('icon', 'share.png'),
  getAssetsFile('icon', 'collect.png')
]

const activeIndex = ref(0)


const handleSelect = (key: number) => {
  if (activeIndex.value == key) return
  activeIndex.value = key
}


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
        width: 78%;
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
