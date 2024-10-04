<template>
  <div class="home">
    <van-swipe vertical>
      <van-swipe-item>
        <div class="box1">123123213</div>
      </van-swipe-item>
      <van-swipe-item> <div class="box2"></div></van-swipe-item>
      <van-swipe-item> <div class="box3"></div></van-swipe-item>
      <van-swipe-item> <div class="box4"></div></van-swipe-item>
    </van-swipe>
  </div>
</template>
<script setup lang="ts">
import { getAssetsFile } from '@/utils/tools'

import { ref } from 'vue'
const productType = ['底纹', '彩妆', '护肤', '清洁', '隔离']
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: auto;
  background-color: pink;
  .box1 {
    width: 100vw;
    height: 100vh;
  }
  .box2 {
    width: 100vw;
    height: 100vh;
  }
  .box3 {
    width: 100vw;
    height: 100vh;
  }
  .box4 {
    width: 100vw;
    height: 100vh;
  }
}
</style>
