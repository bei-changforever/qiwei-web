<template>
  <div class="product-info">
    <div class="product-info-container">
      <div class="product-content">
        <div class="product-left">
          <div class="big-image">
          <img src="" alt="">
          </div>
          <div class="small-image-control">
            <div class="prev"></div>
            <div class="small-image"></div>
            <div class="next"></div>
          </div>
        </div>
        <div class="product-right"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getAssetsFile } from '@/utils/tools'
</script>
<style scoped lang="scss">
.product-info {
  width: 100vw;

  .product-info-container {
    width: var(--base-width);
    margin: 0 auto;
    background-color: pink;

    .product-content {
      width: 100%;
    }
  }
}
</style>
