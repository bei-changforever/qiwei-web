<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="header">
    <el-row :gutter="20">
      <el-col :span="4"
        ><div class="grid-content logo">
          <el-image :src="getAssetsFile('icon', 'LOGO.png')" :fit="'fill'" />
        </div>
      </el-col>
      <el-col :span="16"
        ><div class="grid-content text">
          <div
            v-for="(item, index) in HeaderInfo"
            :class="['text-item', activeIndex == index ? 'active' : '']"
            :key="index"
            @click="handleSelect(index)"
          >
            {{ item }}
          </div>
        </div>
      </el-col>
      <el-col :span="4"
        ><div class="grid-content icon">
          <el-image
            width="21px"
            height="21px"
            v-for="(item, index) in IconInfo"
            :src="item"
            :fit="'fill'"
          />
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { getAssetsFile } from '@/utils/tools'
const HeaderInfo = ['首页', '产品中心', '业务合作', '研发中心', '关于奇伟', '联系我们']
const IconInfo = [
  getAssetsFile('icon', 'search.png'),
  getAssetsFile('icon', 'share.png'),
  getAssetsFile('icon', 'collect.png')
]
const activeIndex = ref(0)
const handleSelect = (key: number) => {
  console.log('点击')

  if (activeIndex.value == key) return
  activeIndex.value = key
}
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100%;
  // background-image: radial-gradient(transparent 1px, var(--vp-c-bg) 1px);
  // background-size: 4px 4px;
  // backdrop-filter: saturate(50%) blur(4px);

  .grid-content {
    width: 100%;
    height: var(--header-height);

    &.logo {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    &.text {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 100px;
      .text-item {
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

    &.icon {
      cursor: pointer;
      display: flex;
      gap: 17px;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
