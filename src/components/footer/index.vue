<template>
  <div class="footer">
    <div class="footer-navbar">
      <div class="block">
        <div class="logo">
          <el-image :src="getAssetsFile('icon', 'LOGO.png')" :fit="'fill'" />
        </div>
        <div class="text">
          <div v-for="(item, index) in HeaderInfo" :class="['text-item']" :key="index">
            {{ item }}
          </div>
        </div>
      </div>
    </div>
    <div class="footer-container">
      <div class="left">
        <div class="topic">妆点生命新色彩</div>
        <div class="detail">一站式OEM/ODM/OBM助力客户产品孵化</div>
        <div class="business">
          <el-image
            width="80px"
            height="80px"
            :src="getAssetsFile('images', 'HALAL.png')"
            :fit="'fill'"
          />
          <el-image
            width="80px"
            height="80px"
            :src="getAssetsFile('images', 'ISO.png')"
            :fit="'fill'"
          />
          <el-image
            width="80px"
            height="80px"
            :src="getAssetsFile('images', 'GMPC.png')"
            :fit="'fill'"
          />
        </div>
      </div>
      <div class="center"></div>
      <div class="right"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { getAssetsFile } from '@/utils/tools'
const HeaderInfo = ['首页', '产品中心', '业务合作', '研发中心', '关于奇伟', '联系我们']
</script>
<style lang="scss" scoped>
.footer {
  width: var(--footer-width);
  height: 100%;
  margin: 0 auto;
  .footer-navbar {
    width: 100%;
    height: 207px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px dashed #707070;
    .block {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .logo {
        width: 40%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        :deep(.el-image) {
          cursor: pointer;
        }
      }

      .text {
        width: 60%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
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
    }
  }
  .footer-container {
    width: 100%;
    height: calc(100% - 208px);
    background-color: pink;
    .left {
      width: 33%;
      background-color: orange;
      .topic {
        height: 52px;
        font-weight: 400;
        font-size: 40px;
        color: #ffffff;
      }
      .detail {
        height: 31px;
        font-weight: 400;
        font-size: 24px;
        color: #ffffff;
      }
    }
  }
}
</style>
