<template>
  <div class="about-banner" id="about-banner">
    <div
      class="about-banner-bg"
      :style="{ backgroundImage: 'url(' + getAssetsFile('images', '关于我们海报.png') + ')' }"
    >
  
    </div>
  </div>
</template>
<script setup lang="ts">
import { getAssetsFile } from '@/utils/tools'
</script>
<style lang="scss" scoped>
.about-banner {
  width: 100vw;
  height: 590px;

  .about-banner-bg {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
}
</style>
