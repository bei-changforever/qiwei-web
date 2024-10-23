<template>
  <div class="bussiness-banner">
    <div
      class="bussiness-banner-bg"
      :style="{ backgroundImage: 'url(' + getAssetsFile('images', '业务合作海报.png') + ')' }"
    >
      <div class="text">
        <div class="big-title">业务合作</div>
        <div class="small-title">快速响应，保障服务，期待与您深度沟通</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { getAssetsFile } from '@/utils/tools'
import { getBanner } from '@/api/index'
const bannerPic = ref('')
onMounted(async () => {
  // let res = await getBanner(5)
  // console.log('res111', res)
})
</script>
<style lang="scss" scoped>
.bussiness-banner {
  width: 100vw;
  height: 70vh;

  .bussiness-banner-bg {
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
  .bussiness-banner {
    width: 100vw;
    height: 300px;

    .bussiness-banner-bg {
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
