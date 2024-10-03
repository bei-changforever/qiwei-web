<template>
  <div class="home">
    <van-swipe style="height: 200px" vertical>
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
</template>
<script setup lang="ts">
import { getAssetsFile } from '@/utils/tools'

import { ref } from 'vue'
const productType = ['底纹', '彩妆', '护肤', '清洁', '隔离']
</script>
<style lang="scss" scoped></style>
