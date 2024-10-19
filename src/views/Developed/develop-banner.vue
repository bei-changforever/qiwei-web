<template>
  <div class="develop-banner">
    <div
      class="develop-banner-bg"
      :style="{ backgroundImage: 'url(' + getAssetsFile('images', '业务合作海报.png') + ')' }"
    >
      <div class="text">
        <div class="big-title">研发中心</div>
        <div class="small-title">专业的研发技术团队，为客户提供定制配方服务</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { getAssetsFile } from '@/utils/tools'
</script>
<style lang="scss" scoped>
.develop-banner {
  width: 100vw;
  height: 70vh;

  .develop-banner-bg {
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
  .develop-banner {
    width: 100vw;
    height: 300px;
    .develop-banner-bg {
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
