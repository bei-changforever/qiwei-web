<template>
  <div class="contact-banner">
    <div class="contact-banner-bg" :style="{ backgroundImage: 'url(' + getAssetsFile('images', '联系我们海报.png') + ')' }">
      <div class="text">
        <div class="big-title">联系我们</div>
        <div class="small-title">您可以通过电话或者留言联系我们，期待您的联系与反馈</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { getAssetsFile } from '@/utils/tools'
</script>
<style lang="scss" scoped>
.contact-banner {
  width: 100vw;
  height: 70vh;

  .contact-banner-bg {
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
  .contact-banner {
    width: 100vw;
    height: 300px;
    .contact-banner-bg {
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