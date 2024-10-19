<template>
  <div class="about-banner" id="about-banner">
    <div
      class="about-banner-bg" :style="{ backgroundImage: 'url(' + getAssetsFile('images',
      '关于奇伟.png') + ')' }">
      <div class="text">
        <div class="big-title">关于奇伟/我们</div>
        <div class="small-title">
          专业彩妆产品的设计、研发、制造的专业化妆品OEM、ODM、OBM生产企业
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getAssetsFile } from '@/utils/tools'
</script>
<style lang="scss" scoped>
.about-banner {
  width: 100vw;
  height: 70vh;

  .about-banner-bg {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    .text {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      .big-title {
        font-family:
          Microsoft YaHei,
          Microsoft YaHei;
        font-weight: bold;
        font-size: 48px;
        color: #ffffff;
      }

      .small-title {
        font-family:
          Microsoft YaHei,
          Microsoft YaHei;
        font-weight: 400;
        font-size: 24px;
        color: #ffffff;
      }
    }
  }
}

@media (max-width: 960px) {
  .about-banner {
    width: 100vw;
    height: 300px;
    .about-banner-bg {
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      .text {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        .big-title {
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;
          font-weight: bold;
          font-size: 24px;
          color: #ffffff;
        }

        .small-title {
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;
          font-weight: 400;
          font-size: 16px;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
